var dataLocation = 'http://www.louafi.fr/kantor-data/';

function getAudioPlayer(filePath) {
    var htmlCode = "<object type=\"application/x-shockwave-flash\" data=\"dewplayer.swf\" width=\"200\" height=\"20\" id=\"dewplayer\" name=\"dewplayer\"><param name=\"movie\" value=\"dewplayer.swf\" /><param name=\"flashvars\" value=\"mp3=[mp3FilePath]\" /><param name=\"wmode\" value=\"transparent\" /></object>";

    return htmlCode.replace("[mp3FilePath]", filePath);
}

function displayLyrics(work) {
    var htmlOriginalLyrics = "";
    var originalLyrics = work["lyrics"]["lines"];
    var countLines = originalLyrics.length;

    if (countLines > 0) {
        htmlOriginalLyrics = "<p>";

        for (var i = 0; i < countLines; i++) {
            var line = originalLyrics[i];
            if (line.length == 0) {
                htmlOriginalLyrics += "</p><p>";
            } else {
                if (work['lyrics']['lang'] !== 'fr') {
                    htmlOriginalLyrics += '<span class="oi textToSpeech" data-glyph="bullhorn" title="Ecouter la prononciation" aria-hidden="true"></span>';
                };

                htmlOriginalLyrics += '<span class="text">' + line + '</span>';

                if (i < originalLyrics.length - 1) {
                    htmlOriginalLyrics += "<br />";
                }
            }
        }

        htmlOriginalLyrics = htmlOriginalLyrics + "</p>";
    }

    $(".work .lyrics .original").html(htmlOriginalLyrics);

    var htmlTranslation = "";
    var translation = work["lyrics"]["translation"];
    var countLines = translation.length;

    if (countLines > 0) {
        htmlTranslation = "<p>";

        for (var i = 0; i < countLines; i++) {
            var line = translation[i];
            if (line.length == 0) {
                htmlTranslation += "</p><p>";
            } else {
                htmlTranslation += line;

                if (i < translation.length - 1) {
                    htmlTranslation += "<br />";
                }
            }
        }

        htmlTranslation = htmlTranslation + "</p>";
    }

    $(".work .lyrics .translation").html(htmlTranslation);

    $('.textToSpeech').click(function () {
        var textToSpeechUrl = 'http://translate.google.fr/translate_tts?ie=UTF-8&tl=' + work['lyrics']['lang'] + '&q=' + encodeURIComponent($(this).next().html());
        var noRefererUrl    = 'http://no-ref.appspot.com/' + encodeURIComponent(textToSpeechUrl);

        var audio = new Audio(noRefererUrl);
        audio.play();
    });
}

function displayVoices(work) {
    var htmlVoices = "";

    var voices = work["voices"];
    var countVoices = voices.length;

    if (countVoices > 0) {
        htmlVoices = "<h2>Voix</h2>";

        for (var i = 0; i < countVoices; i++) {
            voice = voices[i];

            var voiceType = voice["voiceType"];
            var audioFilePath = dataLocation + work["directoryPath"] + "/" + voice["audioFile"];

            var htmlVoice = "<div class=\"voice\"><p>[voiceType]</p><div>[audioPlayer]</div><p class=\"audioFile\"><a href=\"[audioFile]\">Fichier MP3 pour [voiceTypeLowerCase]</a></p></div>";

            htmlVoice = htmlVoice.replace("[voiceType]", voiceType)
                .replace("[audioPlayer]", getAudioPlayer(audioFilePath))
                .replace("[audioFile]", audioFilePath)
                .replace("[voiceTypeLowerCase]", voiceType.toLowerCase());

            htmlVoices += htmlVoice;
        }
    }

    $(".work .voices").html(htmlVoices);
}

function displayInfo(work) {
    var html = "<h1>[title]</h1>";

    html = html.replace("[title]", work["title"]);

    $(".work .info").html(html);
}

function displayScore(work) {
    var htmlAll = "";

    var imageFiles = work["score"]["imageFiles"];

    for (var i = 0; i < imageFiles.length; i++) {
        imageFile = imageFiles[i];

        imageFilePath = dataLocation + work["directoryPath"] + "/" + imageFile;

        html = "<img src=\"[imageFile]\" alt=\"[title]\" width=\"800\" />";
        html = html.replace("[imageFile]", imageFilePath).replace("[title]", work["title"]);

        htmlAll += html;
    }

    htmlFiles = "<div class=\"pdfFile\"><a href=\"[pdfFile]\">Fichier PDF</a></div>";//<div class=\"museScoreFile\"><a href=\"[museScoreFile]\">Fichier MuseScore</a></div>";
    htmlFiles = htmlFiles.replace("[pdfFile]", dataLocation + work["directoryPath"] + "/" + work["score"]["pdfFile"]);
    //.replace("[museScoreFile]", "music/" + work["directoryPath"] + "/" + work["score"]["museScoreFile"]);
    $(".work .score .files").html(htmlFiles);

    $(".work .score .images").html(htmlAll);
}

function displayRecordings(work) {
    var htmlRecordings = "";

    var recordings = work["recordings"];
    var countRecordings = recordings.length;

    if (countRecordings > 0) {
        htmlRecordings = "<h2>Interprétations</h2>";

        for (var i = 0; i < countRecordings; i++) {
            recording = recordings[i];

            html = "<div class=\"recording\"><a href=\"[url]\" rel=\"external\">[title]</a></div>";// ([comment])</div>";
            html = html.replace("[url]", recording["url"]).replace("[title]", recording["title"]);
            //.replace("[comment]", recording["comment"]);

            htmlRecordings += html;
        }
    }

    $(".work .recordings").html(htmlRecordings);
}

function displayWork(works, workId) {
    var work = works[workId];

    $(".work").hide();

    displayInfo(work);
    displayLyrics(work);
    displayVoices(work);
    displayRecordings(work);
    displayScore(work);

    $(".work").show();

    window.location.hash = workId;

    manageExternalLinks();
}

function displaySummary(composers, works) {
    var htmlSummary = "<h2>Liste des partitions</h2>";

    for (var composerId in composers) {
        var composer = composers[composerId];
        var worksIds = composer["works"];
        var htmlComposer = "<div class=\"composer\"><h3>"+composer["name"]+"</h3><ul>";
        for (var i = 0; i < worksIds.length; i++) {
            var workId = worksIds[i];
            var work = works[workId];
            htmlWork = "<li><a href=\"javascript: displayWork(works, [workId]);\">[workTitle]</a></li>";
            htmlWork = htmlWork.replace("[workId]", workId).replace("[workTitle]", work["title"]);
            htmlComposer += htmlWork;
        }
        htmlComposer += "</ul></div>";
        htmlSummary += htmlComposer;
    }

    $(".summary").html(htmlSummary);
}

function displayFromAnchor() {
    // get anchor from the current URL
    var anchor = window.location.hash.substring(1);

    if (anchor != "") {
        displayWork(works, anchor);
    }
}

function manageExternalLinks() {
    $('a[rel="external"]').click(function() {
        window.open($(this).attr('href'));
        return false;
    });
}

$(function() {
    displaySummary(composers, works);
    $(".work").hide();

    displayFromAnchor();

    $(document).bind("hashchange", function() {
        displayFromAnchor();
    });

    manageExternalLinks();
});
