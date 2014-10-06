var composers = {
    "1": {
        "name": "Anonyme",
        "works": ["2", "14"]
    },
    "2": {
        "name": "Monteverdi, Claudio",
        "works": ["1"]
    },
    "3": {
        "name": "Mozart, Wolgang Amadeus",
        "works": ["3", "7", "12", "21", "23"]
    },
    "4": {
        "name": "Traditionnel",
        "works": ["4", "5", "8"]
    },
    "5": {
        "name": "Offenbach, Jacques",
        "works": ["6", "10"]
    },
    "6": {
        "name": "Haydn, Michael",
        "works": ["9", "13", "17"]
    },
    "7": {
        "name": "Haydn, Joseph",
        "works": ["11"]
    },
    "8": {
        "name": "Bataille, Gabriel",
        "works": ["15"]
    },
    "9": {
        "name": "Fauré, Gabriel",
        "works": ["16"]
    },
    "10": {
        "name": "Certon, Pierre",
        "works": ["18", "19"]
    },
    "11": {
        "name": "Bach, Johann Sebastian",
        "works": ["20"]
    },
    "12": {
        "name": "Encina, Juan del",
        "works": ["22", "24"]
    },
    "13": {
        "name": "Janequin, Clément",
        "works": ["25"]
    },
    "14": {
        "name": "Brahms, Johannes",
        "works": ["26"]
    }
}

var works = {
    "1": {
        "composer": "2",
        "title": "Son questi",
        "directoryPath": "monteverdi/son-questi-i-crespi-crini",
        "score": {
            "pdfFile": "Monteverdi - Son questi i crespi crini.pdf",
            "museScoreFile": "",
            "imageFiles": ["Monteverdi - Son questi i crespi crini-1.png"]
        },
        "voices": [
            {
                "voiceType": "Soprano",
                "audioFile": "Monteverdi - Son questi i crespi crini (1).mp3"
            },
            {
                "voiceType": "Alto",
                "audioFile": "Monteverdi - Son questi i crespi crini (2).mp3"
            },
            {
                "voiceType": "Basse",
                "audioFile": "Monteverdi - Son questi i crespi crini (3).mp3"
            }
        ],
        "lyrics": {
            "author": "Anonyme",
            "lang": "it",
            "lines": [
                "Son questi i crespi crini e questo il viso",
                "Ond'io rimango ucciso.",
                "Deh dimelo ben mio che questo sol desio.",
                "",
                "Questi son gli occhi che mirand'io fiso",
                "Tuto restai conquiso",
                "Deh, dimelo ben mio che questo sol desio.",
                "",
                "Questa la bocca e questo il dolce riso",
                "Ch'allegra il Paradiso",
                "Deh, dimelo ben mio che questo sol desio.",
                "",
                "Ma se quest'è che non mi par bugia",
                "Godianci anima mia",
                "Et l'alma al duolo avvezza mora de la dolcezza."
            ],
            "translation": [
                "Voici les cheveux bouclés et le visage",
                "Qui me laissent terrassé.",
                "Oh, dis-le moi, bien aimée, je ne souhaite que cela.",
                "",
                "Voici les yeux dont la contemplation",
                "Me laisse conquis.",
                "Oh, dis-le moi, bien aimée, je ne souhaite que cela.",
                "",
                "Voici la bouche et le doux sourire",
                "Qui réjouissent le paradis.",
                "Oh, dis-le moi, bien aimée, je ne souhaite que cela.",
                "",
                "Mais s'il en est bien ainsi et que je ne suis pas dupé,",
                "Que se réjouisse mon coeur",
                "Et que mon âme accoutumée à la douleur meure de douceur."
            ]
        },
        "recordings": [
            {
                "type": "video",
                "url": "http://www.youtube.com/watch?v=xNDAxAnG3XE",
                "title": "Gruppo Polifonico Quattroquarti",
                "comment": ""
            }
        ]
    },
    "2": {
        "composer": "1",
        "title": "Tantum ergo",
        "directoryPath": "anonyme/tantum-ergo",
        "score": {
            "pdfFile": "Tantum ergo.pdf",
            "museScoreFile": "",
            "imageFiles": ["Tantum ergo-1.png"]
        },
        "voices": [
            {
                "voiceType": "Soprano",
                "audioFile": "Tantum ergo (1).mp3"
            },
            {
                "voiceType": "Alto",
                "audioFile": "Tantum ergo (2).mp3"
            },
            {
                "voiceType": "Basse",
                "audioFile": "Tantum ergo (3).mp3"
            }
        ],
        "lyrics": {
            "author": "Thomas d'Aquin",
            "lang": "la",
            "lines": [
                "Tantum ergo Sacramentum",
                "Veneremur cernui:",
                "Et antiquum documentum",
                "Novo cedat ritui:",
                "Praestet fides supplementum",
                "Sensuum defectui.",
                "",
                "Genitori, Genitoque",
                "Laus et Jubilatio,",
                "Salus, honor, virtus quoque",
                "Sit et benedictio:",
                "Procedenti ab utroque",
                "Compar sit laudatio.",
                "",
                "Amen."
            ],
            "translation": [
                "Un tel Sacrement",
                "Vénérons-le donc, courbés,",
                "Et que l'ancien modèle",
                "S'incline devant le nouveau rite.",
                "Que la foi procure un supplément",
                "À la défaillance des sens.",
                "",
                "Que Celui qui engendre et Celui qui est engendré",
                "Reçoivent louange et chants joyeux,",
                "Salut, honneur, et puissance également,",
                "Ainsi que la bénédiction.",
                "Que Celui qui procède de l'un et l'autre",
                "Reçoive pareil éloge.",
                "",
                "Amen."
            ]
        },
        "recordings": []
    },
    "3": {
        "composer": "3",
        "title": "Più non si trovano",
        "directoryPath": "mozart/piu-non-si-trovano",
        "score": {
            "pdfFile": "Mozart - Piu non si trovano.pdf",
            "museScoreFile": "",
            "imageFiles": ["Mozart - Piu non si trovano-1.png", "Mozart - Piu non si trovano-2.png"]
        },
        "voices": [
            {
                "voiceType": "Soprano",
                "audioFile": "Mozart - Piu non si trovano (1).mp3"
            },
            {
                "voiceType": "Alto",
                "audioFile": "Mozart - Piu non si trovano (2).mp3"
            },
            {
                "voiceType": "Basse",
                "audioFile": "Mozart - Piu non si trovano (3).mp3"
            }
        ],
        "lyrics": {
            "author": "Pietro Metastasio",
            "lang": "it",
            "lines": [
                "Piú non si trovano",
                "Tra mille amanti",
                "Sol due bell'anime",
                "Che sian costanti,",
                "E tutti parlano",
                "Di fedeltà!",
                "",
                "E il reo costume",
                "Tanto s'avanza",
                "Che la costanza",
                "Di chi ben ama",
                "Ormai si chiama semplicità."
            ],
            "translation": [
                "On ne trouve plus",
                "Parmi mille amants",
                "Ne serait-ce que deux belles âmes",
                "Qui soient fidèles,",
                "Et tous parlent",
                "De fidélité !",
                "",
                "Et cette pratique coupable",
                "Est si répandue",
                "Que la fidélité",
                "De ceux qui s'aiment sincèrement",
                "S'appelle désormais naïveté."
            ]
        },
        "recordings": [
            {
                "type": "audio",
                "url": "http://grooveshark.com/s/Pi+Non+Si+Trovano+KV+549/2IKNrN",
                "title": "Nederlands Blazers Ensemble (Complete Mozart Edition, Philips)",
                "comment": ""
            }
        ]
    },
    "4": {
        "composer": "4",
        "title": "Douce nuit",
        "directoryPath": "traditionnel/douce-nuit",
        "score": {
            "pdfFile": "Douce nuit.pdf",
            "museScoreFile": "",
            "imageFiles": ["Douce nuit.png"]
        },
        "voices": [
            {
                "voiceType": "Soprano",
                "audioFile": "Douce nuit (1).mp3"
            },
            {
                "voiceType": "Alto",
                "audioFile": "Douce nuit (2).mp3"
            },
            {
                "voiceType": "Ténor",
                "audioFile": "Douce nuit (3).mp3"
            },
            {
                "voiceType": "Basse",
                "audioFile": "Douce nuit (4).mp3"
            }
        ],
        "lyrics": {
            "author": "Anonyme",
            "lang": "fr",
            "lines": [],
            "translation": []
        },
        "recordings": []
    },
    "5": {
        "composer": "4",
        "title": "Les anges dans nos campagnes",
        "directoryPath": "traditionnel/les-anges-dans-nos-campagnes",
        "score": {
            "pdfFile": "Les anges dans nos campagnes.pdf",
            "museScoreFile": "",
            "imageFiles": ["Les anges dans nos campagnes-page1.png", "Les anges dans nos campagnes-page2.png"]
        },
        "voices": [
            {
                "voiceType": "Soprano",
                "audioFile": "Les anges dans nos campagnes (1).mp3"
            },
            {
                "voiceType": "Alto",
                "audioFile": "Les anges dans nos campagnes (2).mp3"
            },
            {
                "voiceType": "Ténor",
                "audioFile": "Les anges dans nos campagnes (3).mp3"
            },
            {
                "voiceType": "Basse",
                "audioFile": "Les anges dans nos campagnes (4).mp3"
            }
        ],
        "lyrics": {
            "author": "Anonyme",
            "lang": "fr",
            "lines": [],
            "translation": []
        },
        "recordings": []
    },
    "6": {
        "composer": "5",
        "title": "La belle Hélène",
        "directoryPath": "offenbach/la-belle-helene",
        "score": {
            "pdfFile": "Offenbach - La belle Hélène.pdf",
            "museScoreFile": "",
            "imageFiles": ["Offenbach - La belle Hélène-page1.png", "Offenbach - La belle Hélène-page2.png", "Offenbach - La belle Hélène-page3.png"]
        },
        "voices": [
            {
                "voiceType": "Soliste",
                "audioFile": "Offenbach - La belle Helene (1).mp3"
            },
            {
                "voiceType": "Choeur",
                "audioFile": "Offenbach - La belle Helene (2).mp3"
            }
        ],
        "lyrics": {
            "author": "Henri Meilhac, Ludovic Halévy",
            "lang": "fr",
            "lines": [
                "Ces rois remplis de vaillance",
                "C'est les deux Ajax",
                "Etalant avec jactance",
                "leur double thorax",
                "Parmi le fracas immense",
                "Des cuivres de Sax",
                "Ces rois remplis de vaillance",
                "C'est les deux Ajax",
                "",
                "Je suis le bouillant Achille",
                "Le grand myrmidon",
                "Combattant un contre mille",
                "Grâce à mon plongeon",
                "Grâce au, grâce au plongeon",
                "J'aurai l'esprit bien tranquille",
                "N'était mon talon",
                "Je suis le bouillant Achille",
                "Le grand myrmidon",
                "",
                "Je suis l'époux de la reine",
                "Le roi Ménélas",
                "Je crains bien qu'un jour Hélène",
                "Je le dis tout bas",
                "Ne me fasse de la peine",
                "N'anticipons pas.",
                "Je suis l'époux de la reine",
                "Le roi Ménélas",
                "",
                "Le roi barbu qui s'avance",
                "C'est Agamemnon",
                "Et ce nom seul me dispense",
                "Seul me dispense",
                "D'en dire plus long",
                "J'en ai assez dit, je pense,",
                "En disant mon nom",
                "Le roi barbu qui s'avance",
                "C'est Agamemnon"
            ],
            "translation": []
        },
        "recordings": [
            {
                "type": "video",
                "url": "http://www.youtube.com/watch?v=L7eOU3M2s0o",
                "title": "Estivales en Puisaye (2009)",
                "comment": ""
            },
            {
                "type": "video",
                "url": "http://www.youtube.com/watch?v=2yBrRy2OLVY",
                "title": "Théâtre musical de Paris, Châtelet (2000)",
                "comment": ""
            },
            {
                "type": "video",
                "url": "http://www.youtube.com/watch?v=3zdVGKw3CgE",
                "title": "Ville de Montesson (2009)",
                "comment": ""
            }
        ]
    },
    "7": {
        "composer": "3",
        "title": "Ave verum",
        "directoryPath": "mozart/ave-verum",
        "score": {
            "pdfFile": "Mozart - Ave verum.pdf",
            "museScoreFile": "",
            "imageFiles": ["Mozart - Ave verum-page1.png", "Mozart - Ave verum-page2.png"]
        },
        "voices": [
            {
                "voiceType": "Soprano",
                "audioFile": "Mozart - Ave verum (1).mp3"
            },
            {
                "voiceType": "Alto",
                "audioFile": "Mozart - Ave verum (2).mp3"
            },
            {
                "voiceType": "Ténor",
                "audioFile": "Mozart - Ave verum (3).mp3"
            },
            {
                "voiceType": "Basse",
                "audioFile": "Mozart - Ave verum (4).mp3"
            }
        ],
        "lyrics": {
            "author": "Anonyme",
            "lang": "la",
            "lines": [
                "Ave Verum Corpus natum de Maria Virgine",
                "Vere passum, immolatum in cruce pro homine,",
                "Cuius latus perforatum unda fluxit et sanguine,",
                "Esto nobis praegustatum in mortis examine."
            ],
            "translation": [
                "Salut Vrai Corps né de la Vierge Marie",
                "Ayant vraiment souffert, immolé sur la croix pour l'homme,",
                "Dont le flan percé laissa couler eau et sang,",
                "Sois pour nous un avant-goût dans l'épreuve de la mort."
            ]
        },
        "recordings": [
            {
                "type": "video",
                "url": "http://www.youtube.com/watch?v=6KUDs8KJc_c",
                "title": "Choeur et orchestre de la Radiodiffusion bavaroise (Bernstein, 1990)",
                "comment": ""
            }
        ]
    },
    "8": {
        "composer": "4",
        "title": "Noël nouvelet",
        "directoryPath": "traditionnel/noel-nouvelet",
        "score": {
            "pdfFile": "Noel nouvelet.pdf",
            "museScoreFile": "",
            "imageFiles": ["Noel nouvelet.png"]
        },
        "voices": [
            {
                "voiceType": "Soprano",
                "audioFile": "Noel nouvelet (1).mp3"
            },
            {
                "voiceType": "Alto",
                "audioFile": "Noel nouvelet (2).mp3"
            },
            {
                "voiceType": "Basse",
                "audioFile": "Noel nouvelet (3).mp3"
            }
        ],
        "lyrics": {
            "author": "Anonyme",
            "lang": "fr",
            "lines": [
                "Noël nouvelet, Noël chantons ici,",
                "Nouvelles gens, rendons à Dieu merci !",
                "Chantons Noël pour le roi nouvelet !",
                "Noël, Noël, ô Noël nouvelet !",
                "",
                "Quand je m'éveillai, que j'eus assez dormi,",
                "Ouvris les yeux, vis un arbre fleuri",
                "Dont il sortait un doux chant merveillet.",
                "Noël, Noël, ô Noël nouvelet !",
                "",
                "C'est un oiselet au plumage joli",
                "Qui aux pasteurs disait : \"partez d'ici,",
                "En Bethléem trouverez l'Agnelet\".",
                "Noël, Noël, ô Noël nouvelet !",
                "",
                "Quand fus arrivé, vis Joseph et Marie,",
                "L'âne et le bœuf, l'enfant couché au lit,",
                "La crèche était au lieu d'un bercelet.",
                "Noël, Noël, ô Noël nouvelet !"
            ],
            "translation": []
        },
        "recordings": []
    },
    "9": {
        "composer": "6",
        "title": "Tristis est anima mea",
        "directoryPath": "haydn-michael/tristis-est-anima-mea",
        "score": {
            "pdfFile": "Michael Haydn - Tristis est anima mea.pdf",
            "museScoreFile": "",
            "imageFiles": ["Michael Haydn - Tristis est anima mea-page1.png", "Michael Haydn - Tristis est anima mea-page2.png"]
        },
        "voices": [
            {
                "voiceType": "Soprano",
                "audioFile": "Michael Haydn - Tristis est anima mea (1).mp3"
            },
            {
                "voiceType": "Alto",
                "audioFile": "Michael Haydn - Tristis est anima mea (2).mp3"
            },
            {
                "voiceType": "Ténor",
                "audioFile": "Michael Haydn - Tristis est anima mea (3).mp3"
            },
            {
                "voiceType": "Basse",
                "audioFile": "Michael Haydn - Tristis est anima mea (4).mp3"
            }
        ],
        "lyrics": {
            "author": "L'évangile selon Saint Matthieu, chapitre 26, verset 38",
            "lang": "la",
            "lines": [
                "Tristis est anima mea usque ad mortem:",
                "sustinete hic, et vigilate mecum:",
                "nunc videbitis turbam, quæ circumdabit me:",
                "Vos fugam capietis, et ego vadam immolari pro vobis.",
                "",
                "Ecce appropinquat hora, et Filius hominis",
                "tradetur in manus peccatorum."
            ],
            "translation": [
                "Mon âme est triste à en mourir ;",
                "Restez ici et veillez avec moi.",
                "Maintenant vous allez voir la foule qui m'encercle ;",
                "Vous, vous prendrez la fuite, et moi je vais être sacrifié pour vous.",
                "",
                "Voici l'heure qui approche et le Fils de l'homme",
                "Va être livré aux mains des pécheurs."
            ]
        },
        "recordings": [
            {
                "type": "video",
                "url": "http://www.youtube.com/watch?v=ujnn2sDHEfA",
                "title": "Maîtrise d'Antony (2011)",
                "comment": ""
            },
            {
                "type": "video",
                "url": "http://www.youtube.com/watch?v=LWfw_cKdy5k",
                "title": "Choeur de chambre du conservatoire de Côme (2009)",
                "comment": ""
            }
        ]
    },
    "10": {
        "composer": "5",
        "title": "Voici les rois de la Grèce",
        "directoryPath": "offenbach/voici-les-rois",
        "score": {
            "pdfFile": "Voici les rois de la Grece.pdf",
            "museScoreFile": "",
            "imageFiles": ["Voici les rois de la Grece-page1.png", "Voici les rois de la Grece-page2.png"]
        },
        "voices": [
            {
                "voiceType": "Soprano",
                "audioFile": "Voici les rois de la Grece (1).mp3"
            },
            {
                "voiceType": "Ténor",
                "audioFile": "Voici les rois de la Grece (2).mp3"
            },
            {
                "voiceType": "Basse",
                "audioFile": "Voici les rois de la Grece (3).mp3"
            }
        ],
        "lyrics": {
            "author": "Henri Meilhac, Ludovic Halévy",
            "lang": "fr",
            "lines": [
                "Voici les rois de la Grèce !",
                "Il faut que le choeur s'empresse",
                "De les nommer par leur nom.",
                "",
                "Ça ! Peuple, faisons silence !",
                "Ça ! Peuple, faisons silence !",
                "",
                "Voici les rois de la Grèce !",
                "Il faut que chacun s’empresse",
                "De les nommer par leur nom.",
                "",
                "Voici les rois de la Grèce !",
                "Voici les rois !"
            ],
            "translation": []
        },
        "recordings": [
            {
                "type": "video",
                "url": "http://youtu.be/bFFyJW5wH0U?t=25m50s",
                "title": "Choeur et orchestre philharmonique de Paris (Leibowitz, 1952)",
                "comment": ""
            }
        ]
    },
    "11": {
        "composer": "7",
        "title": "Betrachtung des Todes",
        "directoryPath": "haydn-joseph/betrachtung-des-todes",
        "score": {
            "pdfFile": "Betrachtung des Todes.pdf",
            "museScoreFile": "",
            "imageFiles": ["Betrachtung des Todes-page1.png", "Betrachtung des Todes-page2.png"]
        },
        "voices": [
            {
                "voiceType": "Soprano",
                "audioFile": "Betrachtung des Todes (1).mp3"
            },
            {
                "voiceType": "Ténor",
                "audioFile": "Betrachtung des Todes (2).mp3"
            },
            {
                "voiceType": "Basse",
                "audioFile": "Betrachtung des Todes (3).mp3"
            }
        ],
        "lyrics": {
            "author": "C. F. Gellert",
            "lang": "de",
            "lines": [
                "(Betrachtung des Todes)",
                "",
                "Der Jüngling hofft des Greises Ziel,",
                "Der Mann noch seiner Jahre viel,",
                "Der Greis zu vielen noch ein Jahr,",
                "Und keiner nimmt den Irrtum wahr."
            ],
            "translation": [
                "(Contemplation de la mort)",
                "",
                "Le jeune homme espère vivre vieux,",
                "L'homme mûr de nombreuses années encore,",
                "Le vieil homme une année de plus,",
                "Et aucun ne voit l'erreur."
            ]
        },
        "recordings": [
            {
                "type": "video",
                "url": "http://www.youtube.com/watch?v=VSMSkHJWlnw",
                "title": "Ensemble Tamiris",
                "comment": ""
            }
        ]
    },
    "12": {
        "composer": "3",
        "title": "Missa brevis (KV 194), Agnus Dei",
        "directoryPath": "mozart/missa-brevis-kv-194/agnus-dei",
        "score": {
            "pdfFile": "Agnus Dei.pdf",
            "museScoreFile": "",
            "imageFiles": ["Agnus Dei-page1.png", "Agnus Dei-page2.png", "Agnus Dei-page3.png", "Agnus Dei-page4.png"]
        },
        "voices": [
            {
                "voiceType": "Soprano",
                "audioFile": "Agnus Dei (1).mp3"
            },
            {
                "voiceType": "Alto",
                "audioFile": "Agnus Dei (2).mp3"
            },
            {
                "voiceType": "Ténor",
                "audioFile": "Agnus Dei (3).mp3"
            },
            {
                "voiceType": "Basse",
                "audioFile": "Agnus Dei (4).mp3"
            }
        ],
        "lyrics": {
            "author": "Évangile selon Jean (1,29)",
            "lang": "la",
            "lines": [
                "Agnus Dei, qui tollis peccata mundi, miserere nobis.",
                "Agnus Dei, qui tollis peccata mundi, dona nobis pacem."
            ],
            "translation": [
                "Agneau de Dieu qui enlèves les péchés du monde, aie pitié de nous.",
                "Agneau de Dieu qui enlèves les péchés du monde, donne-nous la paix."
            ]
        },
        "recordings": [
            {
                "type": "video",
                "url": "http://www.youtube.com/watch?v=uUVHZt6pKi4",
                "title": "Choeur et orchestre symphonique de la Radio MDR de Leipzig",
                "comment": ""
            },
            {
                "type": "video",
                "url": "http://youtu.be/MEfRfUigMLU?t=2m43s",
                "title": "Choeur et orchestre philharmonique du Kosovo (Rafet Rudi, 2011)",
                "comment": ""
            }
        ]
    },
    "13": {
        "composer": "6",
        "title": "Una hora",
        "directoryPath": "haydn-michael/una-hora",
        "score": {
            "pdfFile": "Michael Haydn - Una hora.pdf",
            "museScoreFile": "",
            "imageFiles": ["Michael Haydn - Una hora-page1.png", "Michael Haydn - Una hora-page2.png"]
        },
        "voices": [
            {
                "voiceType": "Soprano",
                "audioFile": "Michael Haydn - Una hora (1).mp3"
            },
            {
                "voiceType": "Alto",
                "audioFile": "Michael Haydn - Una hora (2).mp3"
            },
            {
                "voiceType": "Ténor",
                "audioFile": "Michael Haydn - Una hora (3).mp3"
            },
            {
                "voiceType": "Basse",
                "audioFile": "Michael Haydn - Una hora (4).mp3"
            }
        ],
        "lyrics": {
            "author": "",
            "lang": "la",
            "lines": [
                "Una hora non potuistis vigilare mecum,",
                "Qui exhortabamini mori pro me?",
                "",
                "Vel Judam non videtis quomodo non dormit,",
                "Sed festinat tradere me Judaeis? ",
                "",
                "Quid dormitis? Surgite et orate,",
                "Ne intretis in tentationem."
            ],
            "translation": [
                "Ne peux-tu veiller une heure avec moi,",
                "Toi qui étais prêt à mourir pour moi ? ",
                "",
                "Ne vois-tu pas comme Judas ne dort pas,",
                "Mais se hâte de me livrer aux Juifs ?",
                "",
                "Pourquoi dors-tu ? Lève-toi et prie,",
                "N'entre pas en tentation."
            ]
        },
        "recordings": []
    },
    "14": {
        "composer": "1",
        "title": "Tourdion",
        "directoryPath": "anonyme/tourdion",
        "score": {
            "pdfFile": "Tourdion.pdf",
            "museScoreFile": "",
            "imageFiles": ["Tourdion.png"]
        },
        "voices": [
            {
                "voiceType": "Soprano",
                "audioFile": "Tourdion (1).mp3"
            },
            {
                "voiceType": "Alto",
                "audioFile": "Tourdion (2).mp3"
            },
            {
                "voiceType": "Ténor",
                "audioFile": "Tourdion (3).mp3"
            },
            {
                "voiceType": "Basse",
                "audioFile": "Tourdion (4).mp3"
            }
        ],
        "lyrics": {
            "author": "",
            "lang": "fr",
            "lines": [
                "(soprano)",
                "",
                "Quand je bois du vin clairet, ami, tout tourne",
                "Aussi désormais je bois Anjou ou Arbois.",
                "Chantons et buvons, à ce flacon faisons la guerre !",
                "Chantons et buvons, mes amis, buvons donc !",
                "",
                "(alto)",
                "",
                "Le bon vin nous a rendu gais, chantons,",
                "Oublions nos peines, chantons !",
                "En mangeant d'un gras jambon,",
                "A ce flacon faisons la guerre !",
                "",
                "(ténor et basse)",
                "",
                "Buvons bien, buvons, mes amis, trinquons,",
                "Buvons, gaiement chantons !",
                "En mangeant d'un gras jambon,",
                "A ce flacon faisons la guerre !"
            ],
            "translation": []
        },
        "recordings": []
    },
    "15": {
        "composer": "8",
        "title": "Qui veut chasser une migraine",
        "directoryPath": "bataille/qui-veut-chasser-une-migraine",
        "score": {
            "pdfFile": "Qui veut chasser une migraine.pdf",
            "museScoreFile": "",
            "imageFiles": ["Qui veut chasser une migraine.png"]
        },
        "voices": [
            {
                "voiceType": "Soprano",
                "audioFile": "Qui veut chasser une migraine (1).mp3"
            },
            {
                "voiceType": "Alto",
                "audioFile": "Qui veut chasser une migraine (2).mp3"
            },
            {
                "voiceType": "Ténor",
                "audioFile": "Qui veut chasser une migraine (3).mp3"
            },
            {
                "voiceType": "Basse",
                "audioFile": "Qui veut chasser une migraine (4).mp3"
            }
        ],
        "lyrics": {
            "author": "",
            "lang": "fr",
            "lines": [
                "Qui veut chasser une migraine",
                "N'a qu'à boire toujours du bon,",
                "Et maintenir la table pleine",
                "De cervelas et de jambon.",
                "",
                "(Refrain :)",
                "L'eau ne fait rien que pourrir le poumon,",
                "Boute boute boute boute compagnons,",
                "Vide-nous ce verre",
                "Et nous le remplirons.",
                "",
                "Le vin goûté par ce bon père,",
                "Qui s'en rendit si beau garçon,",
                "Nous fait discourir sans grammaire,",
                "Et nous rend savants sans leçon.",
                "",
                "(Refrain)",
                "",
                "Loth buvant dans une caverne",
                "De ses filles enfla le sein,",
                "Montrant qu'un sirot de taverne",
                "Passe celui d'un médecin.",
                "",
                "(Refrain)",
                "",
                "Buvons donc tous à la bonne heure",
                "Pour nous émouvoir le rognon.",
                "Et que celui d'entre nous meure",
                "Qui dédira son compagnon.",
                "",
                "(Refrain)"
            ],
            "translation": []
        },
        "recordings": []
    },
    "16": {
        "composer": "9",
        "title": "Cantique de Jean Racine",
        "directoryPath": "faure/cantique-de-jean-racine",
        "score": {
            "pdfFile": "Cantique de Jean Racine.pdf",
            "museScoreFile": "",
            "imageFiles": ["Cantique de Jean Racine-page1.png", "Cantique de Jean Racine-page2.png", "Cantique de Jean Racine-page3.png"]
        },
        "voices": [
            {
                "voiceType": "Soprano",
                "audioFile": "Cantique de Jean Racine (1).mp3"
            },
            {
                "voiceType": "Alto",
                "audioFile": "Cantique de Jean Racine (2).mp3"
            },
            {
                "voiceType": "Ténor",
                "audioFile": "Cantique de Jean Racine (3).mp3"
            },
            {
                "voiceType": "Basse",
                "audioFile": "Cantique de Jean Racine (4).mp3"
            }
        ],
        "lyrics": {
            "author": "Jean Racine",
            "lang": "fr",
            "lines": [
                "Verbe égal au Très-Haut, notre unique espérance,",
                "Jour éternel de la terre et des cieux,",
                "De la paisible nuit nous rompons le silence :",
                "Divin Sauveur, jette sur nous les yeux.",
                "",
                "Répands sur nous le feu de Ta grâce puissante ;",
                "Que tout l'enfer fuie au son de Ta voix ;",
                "Dissipe le sommeil d'une âme languissante",
                "Qui la conduit à l'oubli de Tes lois !",
                "",
                "Ô Christ ! sois favorable à ce peuple fidèle,",
                "Pour Te bénir maintenant rassemblé ;",
                "Reçois les chants qu'il offre à Ta gloire immortelle,",
                "Et de Tes dons qu'il retourne comblé."
            ],
            "translation": []
        },
        "recordings": []
    },
    "17": {
        "composer": "6",
        "title": "Halleluja",
        "directoryPath": "haydn-michael/halleluja",
        "score": {
            "pdfFile": "Michael Haydn - Halleluja.pdf",
            "museScoreFile": "",
            "imageFiles": ["Michael Haydn - Halleluja.png"]
        },
        "voices": [
            {
                "voiceType": "Soprano",
                "audioFile": "Michael Haydn - Halleluja (1).mp3"
            },
            {
                "voiceType": "Alto",
                "audioFile": "Michael Haydn - Halleluja (2).mp3"
            },
            {
                "voiceType": "Basse",
                "audioFile": "Michael Haydn - Halleluja (3).mp3"
            }
        ],
        "lyrics": {
            "author": "",
            "lang": "de",
            "lines": ["Halleluja"],
            "translation": []
        },
        "recordings": [
            {
                "type": "video",
                "url": "http://www.youtube.com/watch?v=2CnZkrq7yEc",
                "title": "Choeur Vox Nova, Mount Aloysius College (2012)",
                "comment": ""
            }
        ]
    },
    "18": {
        "composer": "10",
        "title": "La, la, la, je ne l'ose dire",
        "directoryPath": "certon/la-la-la-je-ne-l-ose-dire",
        "score": {
            "pdfFile": "Pierre Certon - La, la, la, je ne l'ose dire.pdf",
            "museScoreFile": "",
            "imageFiles": ["Pierre Certon - La, la, la, je ne l'ose dire.png"]
        },
        "voices": [
            {
                "voiceType": "Soprano",
                "audioFile": "Pierre Certon - La, la, la, je ne l'ose dire (1).mp3"
            },
            {
                "voiceType": "Alto",
                "audioFile": "Pierre Certon - La, la, la, je ne l'ose dire (2).mp3"
            },
            {
                "voiceType": "Ténor",
                "audioFile": "Pierre Certon - La, la, la, je ne l'ose dire (3).mp3"
            },
            {
                "voiceType": "Basse",
                "audioFile": "Pierre Certon - La, la, la, je ne l'ose dire (4).mp3"
            }
        ],
        "lyrics": {
            "author": "",
            "lang": "fr",
            "lines": [
                "La, la, la, je ne l'ose dire",
                "La, la, la, je le vous diray",
                "Et la, la la , je vous le diray",
                "",
                "Il est ung homme en no ville",
                "Qui de sa femme est jaloux",
                "Il n'est pas jaloux sans cause",
                "Mais il est cocu du tout",
                "",
                "(Refrain :)",
                "Et la, la, la, je ne l'ose dire",
                "La, la, la, je le vous diray",
                "Et la, la la , je vous le diray",
                "",
                "Il n'est pas jaloux sans cause",
                "Mais il est cocu du tout",
                "Il apreste et si la maine",
                "Au marché s'en va a tout",
                "",
                "(Refrain)",
                "",
                "Enfin, las de ce supplice",
                "Le pauvre homme se pendit",
                "Mais sa femme par malice",
                "Chez Lucifer le suivit",
                "",
                "(Refrain)",
                "",
                "La morale de cette histoire",
                "C'est qu'avant de se marier",
                "Il faut savoir le jour-même",
                "Que c'est pour l'éternité",
                "",
                "(Refrain)"
            ],
            "translation": []
        },
        "recordings": []
    },
    "19": {
        "composer": "10",
        "title": "Je ne fus jamais si ayse",
        "directoryPath": "certon/je-ne-fus-jamais-si-ayse",
        "score": {
            "pdfFile": "Pierre Certon - Je ne fus jamais si ayse.pdf",
            "museScoreFile": "",
            "imageFiles": ["Pierre Certon - Je ne fus jamais si ayse.png"]
        },
        "voices": [
            {
                "voiceType": "Soprano",
                "audioFile": "Pierre Certon - Je ne fus jamais si ayse (1).mp3"
            },
            {
                "voiceType": "Ténor",
                "audioFile": "Pierre Certon - Je ne fus jamais si ayse (2).mp3"
            },
            {
                "voiceType": "Basse",
                "audioFile": "Pierre Certon - Je ne fus jamais si ayse (3).mp3"
            }
        ],
        "lyrics": {
            "author": "",
            "lang": "fr",
            "lines": [],
            "translation": []
        },
        "recordings": []
    },
    "20": {
        "composer": "11",
        "title": "Denn das Gesetz",
        "directoryPath": "bach/denn-das-gesetz",
        "score": {
            "pdfFile": "Bach - Denn das Gesetz.pdf",
            "museScoreFile": "",
            "imageFiles": ["Bach - Denn das Gesetz.png"]
        },
        "voices": [
            {
                "voiceType": "Soprano",
                "audioFile": "Bach - Denn das Gesetz (1).mp3"
            },
            {
                "voiceType": "Ténor",
                "audioFile": "Bach - Denn das Gesetz (2).mp3"
            },
            {
                "voiceType": "Basse",
                "audioFile": "Bach - Denn das Gesetz (3).mp3"
            }
        ],
        "lyrics": {
            "author": "Épître aux Romains 8:2",
            "lang": "de",
            "lines": [
                "Denn das Gesetz des Geistes der da lebendig machet in Christo Jesu",
                "Hat mich frei gemacht von dem Gesetz der Sünde und des Todes."
            ],
            "translation": [
                "Car la loi de l'esprit de vie en Jésus-Christ",
                "M'a affranchi de la loi du péché et de la mort."
            ]
        },
        "recordings": []
    },
    "21": {
        "composer": "3",
        "title": "Grazie agl'inganni tuoi",
        "directoryPath": "mozart/grazie-agl-inganni-tuoi",
        "score": {
            "pdfFile": "Mozart - Grazie agl'inganni tuoi.pdf",
            "museScoreFile": "",
            "imageFiles": ["Mozart - Grazie agl'inganni tuoi (1).png", "Mozart - Grazie agl'inganni tuoi (2).png"]
        },
        "voices": [
            {
                "voiceType": "Soprano",
                "audioFile": "Mozart - Grazie agl'inganni tuoi (1).mp3"
            },
            {
                "voiceType": "Ténor",
                "audioFile": "Mozart - Grazie agl'inganni tuoi (2).mp3"
            },
            {
                "voiceType": "Basse",
                "audioFile": "Mozart - Grazie agl'inganni tuoi (3).mp3"
            }
        ],
        "lyrics": {
            "author": "",
            "lang": "it",
            "lines": [
                "Grazie agl'inganni tuoi",
                "Al fin respiro, o Nice",
                "Al fin d'un infelice",
                "Ebber gli Dei pieta",
                "",
                "[...]",
                "Grazie! Grazie!",
                "",
                "E non t'offenda il vero",
                "Nel tuo leggiadro aspetto",
                "Or scopro alcun difetto",
                "Che mi parea belta",
                "",
                "[...]",
                "Grazie! Grazie!",
            ],
            "translation": [
                "Grâce à tes tromperies",
                "Enfin je respire, ô Nice.",
                "Enfin, d'un malheureux",
                "Les Dieux ont eu pitié.",
                "",
                "[...]",
                "Merci ! Merci !",
                "",
                "Et ne t'offense pas de la vérité :",
                "En ta grâcieuse apparence,",
                "Je trouve quelques défauts",
                "Qui me semblaient des beautés.",
                "",
                "[...]",
                "Merci ! Merci !",
            ]
        },
        "recordings": []
    },
    "22": {
        "composer": "12",
        "title": "Ay triste que vengo",
        "directoryPath": "del-encina/ay-triste-que-vengo",
        "score": {
            "pdfFile": "Ay triste que vengo.pdf",
            "museScoreFile": "",
            "imageFiles": ["Ay triste que vengo.png"]
        },
        "voices": [
            {
                "voiceType": "Soprano",
                "audioFile": "Ay triste que vengo (1).mp3"
            },
            {
                "voiceType": "Alto",
                "audioFile": "Ay triste que vengo (2).mp3"
            },
            {
                "voiceType": "Basse",
                "audioFile": "Ay triste que vengo (3).mp3"
            }
        ],
        "lyrics": {
            "author": "",
            "lang": "es",
            "lines": [
            ],
            "translation": [
            ]
        },
        "recordings": []
    },
    "23": {
        "composer": "3",
        "title": "Ave Maria",
        "directoryPath": "mozart/ave-maria",
        "score": {
            "pdfFile": "Ave Maria.pdf",
            "museScoreFile": "",
            "imageFiles": ["Ave Maria - 1.png", "Ave Maria - 2.png"]
        },
        "voices": [
            {
                "voiceType": "Soprano",
                "audioFile": "Ave Maria (1).mp3"
            },
            {
                "voiceType": "Alto",
                "audioFile": "Ave Maria (2).mp3"
            },
            {
                "voiceType": "Ténor",
                "audioFile": "Ave Maria (3).mp3"
            },
            {
                "voiceType": "Basse",
                "audioFile": "Ave Maria (4).mp3"
            }
        ],
        "lyrics": {
            "author": "Anonyme",
            "lang": "la",
            "lines": [
            ],
            "translation": [
            ]
        },
        "recordings": [
        ]
    },
    "24": {
        "composer": "12",
        "title": "Hermitaño quiero ser",
        "directoryPath": "del-encina/hermitano-quiero-ser",
        "score": {
            "pdfFile": "Hermitano quiero ser.pdf",
            "museScoreFile": "",
            "imageFiles": ["Hermitano quiero ser.png"]
        },
        "voices": [
            {
                "voiceType": "Soprano",
                "audioFile": "Hermitano quiero ser (1).mp3"
            },
            {
                "voiceType": "Alto",
                "audioFile": "Hermitano quiero ser (2).mp3"
            },
            {
                "voiceType": "Ténor",
                "audioFile": "Hermitano quiero ser (3).mp3"
            },
            {
                "voiceType": "Basse",
                "audioFile": "Hermitano quiero ser (4).mp3"
            }
        ],
        "lyrics": {
            "author": "",
            "lang": "es",
            "lines": [
            ],
            "translation": [
            ]
        },
        "recordings": []
    },
    "25": {
        "composer": "13",
        "title": "Ce moys de may",
        "directoryPath": "janequin/ce-moys-de-may",
        "score": {
            "pdfFile": "Ce moys de may.pdf",
            "museScoreFile": "",
            "imageFiles": ["Ce moys de may-page1.png", "Ce moys de may-page2.png"]
        },
        "voices": [
            {
                "voiceType": "Soprano",
                "audioFile": "Ce moys de may (1).mp3"
            },
            {
                "voiceType": "Alto",
                "audioFile": "Ce moys de may (2).mp3"
            },
            {
                "voiceType": "Ténor",
                "audioFile": "Ce moys de may (3).mp3"
            },
            {
                "voiceType": "Basse",
                "audioFile": "Ce moys de may (4).mp3"
            }
        ],
        "lyrics": {
            "author": "",
            "lang": "es",
            "lines": [
            ],
            "translation": [
            ]
        },
        "recordings": []
    },
    "26": {
        "composer": "14",
        "title": "Der tote Knabe",
        "directoryPath": "brahms/der-tote-knabe",
        "score": {
            "pdfFile": "Der tote Knabe.pdf",
            "museScoreFile": "",
            "imageFiles": ["Der tote Knabe.png"]
        },
        "voices": [
            {
                "voiceType": "Soprano",
                "audioFile": "Der tote Knabe (1).mp3"
            },
            {
                "voiceType": "Alto",
                "audioFile": "Der tote Knabe (2).mp3"
            },
            {
                "voiceType": "Ténor",
                "audioFile": "Der tote Knabe (3).mp3"
            },
            {
                "voiceType": "Basse",
                "audioFile": "Der tote Knabe (4).mp3"
            }
        ],
        "lyrics": {
            "author": "",
            "lang": "de",
            "lines": [
            ],
            "translation": [
            ]
        },
        "recordings": []
    }
}
