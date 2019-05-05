const countryCodeArr = [
  {
    code: "af",
    name: "Afghanistan"
  },
  {
    code: "ax",
    name: "Aland Islands"
  },
  {
    code: "al",
    name: "Albania"
  },
  {
    code: "dz",
    name: "Algeria"
  },
  {
    code: "as",
    name: "American Samoa"
  },
  {
    code: "ad",
    name: "Andorra"
  },
  {
    code: "ao",
    name: "Angola"
  },
  {
    code: "ai",
    name: "Anguilla"
  },
  {
    code: "aq",
    name: "Antarctica"
  },
  {
    code: "ag",
    name: "Antigua And Barbuda"
  },
  {
    code: "ar",
    name: "Argentina"
  },
  {
    code: "am",
    name: "Armenia"
  },
  {
    code: "aw",
    name: "Aruba"
  },
  {
    code: "au",
    name: "Australia"
  },
  {
    code: "at",
    name: "Austria"
  },
  {
    code: "az",
    name: "Azerbaijan"
  },
  {
    code: "bs",
    name: "Bahamas"
  },
  {
    code: "bh",
    name: "Bahrain"
  },
  {
    code: "bd",
    name: "Bangladesh"
  },
  {
    code: "bb",
    name: "Barbados"
  },
  {
    code: "by",
    name: "Belarus"
  },
  {
    code: "be",
    name: "Belgium"
  },
  {
    code: "bz",
    name: "Belize"
  },
  {
    code: "bj",
    name: "Benin"
  },
  {
    code: "bm",
    name: "Bermuda"
  },
  {
    code: "bt",
    name: "Bhutan"
  },
  {
    code: "bo",
    name: "Bolivia"
  },
  {
    code: "ba",
    name: "Bosnia And Herzegovina"
  },
  {
    code: "bw",
    name: "Botswana"
  },
  {
    code: "bv",
    name: "Bouvet Island"
  },
  {
    code: "br",
    name: "Brazil"
  },
  {
    code: "io",
    name: "British Indian Ocean Territory"
  },
  {
    code: "bn",
    name: "Brunei Darussalam"
  },
  {
    code: "bg",
    name: "Bulgaria"
  },
  {
    code: "bf",
    name: "Burkina Faso"
  },
  {
    code: "bi",
    name: "Burundi"
  },
  {
    code: "kh",
    name: "Cambodia"
  },
  {
    code: "cm",
    name: "Cameroon"
  },
  {
    code: "ca",
    name: "Canada"
  },
  {
    code: "cv",
    name: "Cape Verde"
  },
  {
    code: "ky",
    name: "Cayman Islands"
  },
  {
    code: "cf",
    name: "Central African Republic"
  },
  {
    code: "td",
    name: "Chad"
  },
  {
    code: "cl",
    name: "Chile"
  },
  {
    code: "cn",
    name: "China"
  },
  {
    code: "cx",
    name: "Christmas Island"
  },
  {
    code: "cc",
    name: "Cocos (Keeling) Islands"
  },
  {
    code: "co",
    name: "Colombia"
  },
  {
    code: "km",
    name: "Comoros"
  },
  {
    code: "cg",
    name: "Congo"
  },
  {
    code: "cd",
    name: "Congo, Democratic Republic"
  },
  {
    code: "ck",
    name: "Cook Islands"
  },
  {
    code: "cr",
    name: "Costa Rica"
  },
  {
    code: "ci",
    name: "Cote D'Ivoire"
  },
  {
    code: "hr",
    name: "Croatia"
  },
  {
    code: "cu",
    name: "Cuba"
  },
  {
    code: "cy",
    name: "Cyprus"
  },
  {
    code: "cz",
    name: "Czech Republic"
  },
  {
    code: "dk",
    name: "Denmark"
  },
  {
    code: "dj",
    name: "Djibouti"
  },
  {
    code: "dm",
    name: "Dominica"
  },
  {
    code: "do",
    name: "Dominican Republic"
  },
  {
    code: "ec",
    name: "Ecuador"
  },
  {
    code: "eg",
    name: "Egypt"
  },
  {
    code: "sv",
    name: "El Salvador"
  },
  {
    code: "gq",
    name: "Equatorial Guinea"
  },
  {
    code: "er",
    name: "Eritrea"
  },
  {
    code: "ee",
    name: "Estonia"
  },
  {
    code: "et",
    name: "Ethiopia"
  },
  {
    code: "fk",
    name: "Falkland Islands (Malvinas)"
  },
  {
    code: "fo",
    name: "Faroe Islands"
  },
  {
    code: "fj",
    name: "Fiji"
  },
  {
    code: "fi",
    name: "Finland"
  },
  {
    code: "fr",
    name: "France"
  },
  {
    code: "gf",
    name: "French Guiana"
  },
  {
    code: "pf",
    name: "French Polynesia"
  },
  {
    code: "tf",
    name: "French Southern Territories"
  },
  {
    code: "ga",
    name: "Gabon"
  },
  {
    code: "gm",
    name: "Gambia"
  },
  {
    code: "ge",
    name: "Georgia"
  },
  {
    code: "de",
    name: "Germany"
  },
  {
    code: "gh",
    name: "Ghana"
  },
  {
    code: "gi",
    name: "Gibraltar"
  },
  {
    code: "gr",
    name: "Greece"
  },
  {
    code: "gl",
    name: "Greenland"
  },
  {
    code: "gd",
    name: "Grenada"
  },
  {
    code: "gp",
    name: "Guadeloupe"
  },
  {
    code: "gu",
    name: "Guam"
  },
  {
    code: "gt",
    name: "Guatemala"
  },
  {
    code: "gg",
    name: "Guernsey"
  },
  {
    code: "gn",
    name: "Guinea"
  },
  {
    code: "gw",
    name: "Guinea-Bissau"
  },
  {
    code: "gy",
    name: "Guyana"
  },
  {
    code: "ht",
    name: "Haiti"
  },
  {
    code: "hm",
    name: "Heard Island & Mcdonald Islands"
  },
  {
    code: "va",
    name: "Holy See (Vatican City State)"
  },
  {
    code: "hn",
    name: "Honduras"
  },
  {
    code: "hk",
    name: "Hong Kong"
  },
  {
    code: "hu",
    name: "Hungary"
  },
  {
    code: "is",
    name: "Iceland"
  },
  {
    code: "in",
    name: "India"
  },
  {
    code: "id",
    name: "Indonesia"
  },
  {
    code: "ir",
    name: "Iran, Islamic Republic Of"
  },
  {
    code: "iq",
    name: "Iraq"
  },
  {
    code: "ie",
    name: "Ireland"
  },
  {
    code: "im",
    name: "Isle Of Man"
  },
  {
    code: "il",
    name: "Israel"
  },
  {
    code: "it",
    name: "Italy"
  },
  {
    code: "jm",
    name: "Jamaica"
  },
  {
    code: "jp",
    name: "Japan"
  },
  {
    code: "je",
    name: "Jersey"
  },
  {
    code: "jo",
    name: "Jordan"
  },
  {
    code: "kz",
    name: "Kazakhstan"
  },
  {
    code: "ke",
    name: "Kenya"
  },
  {
    code: "ki",
    name: "Kiribati"
  },
  {
    code: "kr",
    name: "Korea"
  },
  {
    code: "kw",
    name: "Kuwait"
  },
  {
    code: "kg",
    name: "Kyrgyzstan"
  },
  {
    code: "la",
    name: "Lao People's Democratic Republic"
  },
  {
    code: "lv",
    name: "Latvia"
  },
  {
    code: "lb",
    name: "Lebanon"
  },
  {
    code: "ls",
    name: "Lesotho"
  },
  {
    code: "lr",
    name: "Liberia"
  },
  {
    code: "ly",
    name: "Libyan Arab Jamahiriya"
  },
  {
    code: "li",
    name: "Liechtenstein"
  },
  {
    code: "lt",
    name: "Lithuania"
  },
  {
    code: "lu",
    name: "Luxembourg"
  },
  {
    code: "mo",
    name: "Macao"
  },
  {
    code: "mk",
    name: "Macedonia"
  },
  {
    code: "mg",
    name: "Madagascar"
  },
  {
    code: "mw",
    name: "Malawi"
  },
  {
    code: "my",
    name: "Malaysia"
  },
  {
    code: "mv",
    name: "Maldives"
  },
  {
    code: "ml",
    name: "Mali"
  },
  {
    code: "mt",
    name: "Malta"
  },
  {
    code: "mh",
    name: "Marshall Islands"
  },
  {
    code: "mq",
    name: "Martinique"
  },
  {
    code: "mr",
    name: "Mauritania"
  },
  {
    code: "mu",
    name: "Mauritius"
  },
  {
    code: "yt",
    name: "Mayotte"
  },
  {
    code: "mx",
    name: "Mexico"
  },
  {
    code: "fm",
    name: "Micronesia, Federated States Of"
  },
  {
    code: "md",
    name: "Moldova"
  },
  {
    code: "mc",
    name: "Monaco"
  },
  {
    code: "mn",
    name: "Mongolia"
  },
  {
    code: "me",
    name: "Montenegro"
  },
  {
    code: "ms",
    name: "Montserrat"
  },
  {
    code: "ma",
    name: "Morocco"
  },
  {
    code: "mz",
    name: "Mozambique"
  },
  {
    code: "mm",
    name: "Myanmar"
  },
  {
    code: "na",
    name: "Namibia"
  },
  {
    code: "nr",
    name: "Nauru"
  },
  {
    code: "np",
    name: "Nepal"
  },
  {
    code: "nl",
    name: "Netherlands"
  },
  {
    code: "an",
    name: "Netherlands Antilles"
  },
  {
    code: "nc",
    name: "New Caledonia"
  },
  {
    code: "nz",
    name: "New Zealand"
  },
  {
    code: "ni",
    name: "Nicaragua"
  },
  {
    code: "ne",
    name: "Niger"
  },
  {
    code: "ng",
    name: "Nigeria"
  },
  {
    code: "nu",
    name: "Niue"
  },
  {
    code: "nf",
    name: "Norfolk Island"
  },
  {
    code: "mp",
    name: "Northern Mariana Islands"
  },
  {
    code: "no",
    name: "Norway"
  },
  {
    code: "om",
    name: "Oman"
  },
  {
    code: "pk",
    name: "Pakistan"
  },
  {
    code: "pw",
    name: "Palau"
  },
  {
    code: "ps",
    name: "Palestinian Territory, Occupied"
  },
  {
    code: "pa",
    name: "Panama"
  },
  {
    code: "pg",
    name: "Papua New Guinea"
  },
  {
    code: "py",
    name: "Paraguay"
  },
  {
    code: "pe",
    name: "Peru"
  },
  {
    code: "ph",
    name: "Philippines"
  },
  {
    code: "pn",
    name: "Pitcairn"
  },
  {
    code: "pl",
    name: "Poland"
  },
  {
    code: "pt",
    name: "Portugal"
  },
  {
    code: "pr",
    name: "Puerto Rico"
  },
  {
    code: "qa",
    name: "Qatar"
  },
  {
    code: "re",
    name: "Reunion"
  },
  {
    code: "ro",
    name: "Romania"
  },
  {
    code: "ru",
    name: "Russia"
  },
  {
    code: "rw",
    name: "Rwanda"
  },
  {
    code: "bl",
    name: "Saint Barthelemy"
  },
  {
    code: "sh",
    name: "Saint Helena"
  },
  {
    code: "kn",
    name: "Saint Kitts And Nevis"
  },
  {
    code: "lc",
    name: "Saint Lucia"
  },
  {
    code: "mf",
    name: "Saint Martin"
  },
  {
    code: "pm",
    name: "Saint Pierre And Miquelon"
  },
  {
    code: "vc",
    name: "Saint Vincent And Grenadines"
  },
  {
    code: "ws",
    name: "Samoa"
  },
  {
    code: "sm",
    name: "San Marino"
  },
  {
    code: "st",
    name: "Sao Tome And Principe"
  },
  {
    code: "sa",
    name: "Saudi Arabia"
  },
  {
    code: "sn",
    name: "Senegal"
  },
  {
    code: "rs",
    name: "Serbia"
  },
  {
    code: "sc",
    name: "Seychelles"
  },
  {
    code: "sl",
    name: "Sierra Leone"
  },
  {
    code: "sg",
    name: "Singapore"
  },
  {
    code: "sk",
    name: "Slovakia"
  },
  {
    code: "si",
    name: "Slovenia"
  },
  {
    code: "sb",
    name: "Solomon Islands"
  },
  {
    code: "so",
    name: "Somalia"
  },
  {
    code: "za",
    name: "South Africa"
  },
  {
    code: "gs",
    name: "South Georgia And Sandwich Isl."
  },
  {
    code: "es",
    name: "Spain"
  },
  {
    code: "lk",
    name: "Sri Lanka"
  },
  {
    code: "sd",
    name: "Sudan"
  },
  {
    code: "sr",
    name: "Suriname"
  },
  {
    code: "sj",
    name: "Svalbard And Jan Mayen"
  },
  {
    code: "sz",
    name: "Swaziland"
  },
  {
    code: "se",
    name: "Sweden"
  },
  {
    code: "ch",
    name: "Switzerland"
  },
  {
    code: "sy",
    name: "Syrian Arab Republic"
  },
  {
    code: "tw",
    name: "Taiwan"
  },
  {
    code: "tj",
    name: "Tajikistan"
  },
  {
    code: "tz",
    name: "Tanzania"
  },
  {
    code: "th",
    name: "Thailand"
  },
  {
    code: "tl",
    name: "Timor-Leste"
  },
  {
    code: "tg",
    name: "Togo"
  },
  {
    code: "tk",
    name: "Tokelau"
  },
  {
    code: "to",
    name: "Tonga"
  },
  {
    code: "tt",
    name: "Trinidad And Tobago"
  },
  {
    code: "tn",
    name: "Tunisia"
  },
  {
    code: "tr",
    name: "Turkey"
  },
  {
    code: "tm",
    name: "Turkmenistan"
  },
  {
    code: "tc",
    name: "Turks And Caicos Islands"
  },
  {
    code: "tv",
    name: "Tuvalu"
  },
  {
    code: "ug",
    name: "Uganda"
  },
  {
    code: "ua",
    name: "Ukraine"
  },
  {
    code: "ae",
    name: "United Arab Emirates"
  },
  {
    code: "gb",
    name: "United Kingdom"
  },
  {
    code: "us",
    name: "United States"
  },
  {
    code: "us",
    name: "USA"
  },
  {
    code: "um",
    name: "United States Outlying Islands"
  },
  {
    code: "uy",
    name: "Uruguay"
  },
  {
    code: "uz",
    name: "Uzbekistan"
  },
  {
    code: "vu",
    name: "Vanuatu"
  },
  {
    code: "ve",
    name: "Venezuela"
  },
  {
    code: "vn",
    name: "Viet Nam"
  },
  {
    code: "vg",
    name: "Virgin Islands, British"
  },
  {
    code: "vi",
    name: "Virgin Islands, U.S."
  },
  {
    code: "wf",
    name: "Wallis And Futuna"
  },
  {
    code: "eh",
    name: "Western Sahara"
  },
  {
    code: "ye",
    name: "Yemen"
  },
  {
    code: "zm",
    name: "Zambia"
  },
  {
    code: "zw",
    name: "Zimbabwe"
  },
  {
    code: "af",
    name: "afghanistan"
  },
  {
    code: "ax",
    name: "aland Islands"
  },
  {
    code: "al",
    name: "albania"
  },
  {
    code: "dz",
    name: "algeria"
  },
  {
    code: "as",
    name: "american samoa"
  },
  {
    code: "ad",
    name: "andorra"
  },
  {
    code: "ao",
    name: "angola"
  },
  {
    code: "ai",
    name: "anguilla"
  },
  {
    code: "aq",
    name: "antarctica"
  },
  {
    code: "ag",
    name: "antigua And Barbuda"
  },
  {
    code: "ar",
    name: "argentina"
  },
  {
    code: "am",
    name: "armenia"
  },
  {
    code: "aw",
    name: "aruba"
  },
  {
    code: "au",
    name: "australia"
  },
  {
    code: "at",
    name: "austria"
  },
  {
    code: "az",
    name: "azerbaijan"
  },
  {
    code: "bs",
    name: "bahamas"
  },
  {
    code: "bh",
    name: "bahrain"
  },
  {
    code: "bd",
    name: "bangladesh"
  },
  {
    code: "bb",
    name: "barbados"
  },
  {
    code: "by",
    name: "belarus"
  },
  {
    code: "be",
    name: "belgium"
  },
  {
    code: "bz",
    name: "Bblize"
  },
  {
    code: "bj",
    name: "benin"
  },
  {
    code: "bm",
    name: "bermuda"
  },
  {
    code: "bt",
    name: "bhutan"
  },
  {
    code: "bo",
    name: "bolivia"
  },
  {
    code: "ba",
    name: "bosnia And Herzegovina"
  },
  {
    code: "bw",
    name: "botswana"
  },
  {
    code: "bv",
    name: "bouvet Island"
  },
  {
    code: "br",
    name: "brazil"
  },
  {
    code: "io",
    name: "british Indian Ocean Territory"
  },
  {
    code: "bn",
    name: "brunei Darussalam"
  },
  {
    code: "bg",
    name: "bulgaria"
  },
  {
    code: "bf",
    name: "burkina Faso"
  },
  {
    code: "bi",
    name: "burundi"
  },
  {
    code: "kh",
    name: "cambodia"
  },
  {
    code: "cm",
    name: "cameroon"
  },
  {
    code: "ca",
    name: "canada"
  },
  {
    code: "cv",
    name: "cape Verde"
  },
  {
    code: "ky",
    name: "cayman Islands"
  },
  {
    code: "cf",
    name: "central African Republic"
  },
  {
    code: "td",
    name: "chad"
  },
  {
    code: "cl",
    name: "Chile"
  },
  {
    code: "cn",
    name: "china"
  },
  {
    code: "cx",
    name: "christmas Island"
  },
  {
    code: "cc",
    name: "cocos (Keeling) Islands"
  },
  {
    code: "co",
    name: "Ccolombia"
  },
  {
    code: "km",
    name: "comoros"
  },
  {
    code: "cg",
    name: "congo"
  },
  {
    code: "cd",
    name: "congo"
  },
  {
    code: "ck",
    name: "cook Islands"
  },
  {
    code: "cr",
    name: "costa rica"
  },
  {
    code: "ci",
    name: "cote D'Ivoire"
  },
  {
    code: "hr",
    name: "croatia"
  },
  {
    code: "cu",
    name: "cuba"
  },
  {
    code: "cy",
    name: "cyprus"
  },
  {
    code: "cz",
    name: "czech republic"
  },
  {
    code: "dk",
    name: "denmark"
  },
  {
    code: "dj",
    name: "djibouti"
  },
  {
    code: "dm",
    name: "dminica"
  },
  {
    code: "do",
    name: "dominican republic"
  },
  {
    code: "ec",
    name: "ecuador"
  },
  {
    code: "eg",
    name: "egypt"
  },
  {
    code: "sv",
    name: "el salvador"
  },
  {
    code: "gq",
    name: "equatorial Guinea"
  },
  {
    code: "er",
    name: "eritrea"
  },
  {
    code: "ee",
    name: "estonia"
  },
  {
    code: "et",
    name: "ethiopia"
  },
  {
    code: "fk",
    name: "falkland Islands (Malvinas)"
  },
  {
    code: "fo",
    name: "faroe Islands"
  },
  {
    code: "fj",
    name: "fiji"
  },
  {
    code: "fi",
    name: "finland"
  },
  {
    code: "fr",
    name: "france"
  },
  {
    code: "gf",
    name: "french guiana"
  },
  {
    code: "pf",
    name: "french Polynesia"
  },
  {
    code: "tf",
    name: "french Southern Territories"
  },
  {
    code: "ga",
    name: "gabon"
  },
  {
    code: "gm",
    name: "gambia"
  },
  {
    code: "ge",
    name: "georgia"
  },
  {
    code: "de",
    name: "germany"
  },
  {
    code: "gh",
    name: "ghana"
  },
  {
    code: "gi",
    name: "gibraltar"
  },
  {
    code: "gr",
    name: "greece"
  },
  {
    code: "gl",
    name: "greenland"
  },
  {
    code: "gd",
    name: "grenada"
  },
  {
    code: "gp",
    name: "guadeloupe"
  },
  {
    code: "gu",
    name: "guam"
  },
  {
    code: "gt",
    name: "guatemala"
  },
  {
    code: "gg",
    name: "guernsey"
  },
  {
    code: "gn",
    name: "guinea"
  },
  {
    code: "gw",
    name: "guinea-Bissau"
  },
  {
    code: "gy",
    name: "guyana"
  },
  {
    code: "ht",
    name: "haiti"
  },
  {
    code: "hm",
    name: "heard Island & Mcdonald Islands"
  },
  {
    code: "va",
    name: "holy See (Vatican City State)"
  },
  {
    code: "hn",
    name: "honduras"
  },
  {
    code: "hk",
    name: "hong Kong"
  },
  {
    code: "hu",
    name: "hungary"
  },
  {
    code: "is",
    name: "iceland"
  },
  {
    code: "in",
    name: "india"
  },
  {
    code: "id",
    name: "indonesia"
  },
  {
    code: "ir",
    name: "iran"
  },
  {
    code: "iq",
    name: "iraq"
  },
  {
    code: "ie",
    name: "ireland"
  },
  {
    code: "im",
    name: "isle Of Man"
  },
  {
    code: "il",
    name: "israel"
  },
  {
    code: "it",
    name: "italy"
  },
  {
    code: "jm",
    name: "jamaica"
  },
  {
    code: "jp",
    name: "japan"
  },
  {
    code: "je",
    name: "jersey"
  },
  {
    code: "jo",
    name: "jordan"
  },
  {
    code: "kz",
    name: "kazakhstan"
  },
  {
    code: "ke",
    name: "kenya"
  },
  {
    code: "ki",
    name: "kiribati"
  },
  {
    code: "kr",
    name: "korea"
  },
  {
    code: "kw",
    name: "kuwait"
  },
  {
    code: "kg",
    name: "kyrgyzstan"
  },
  {
    code: "la",
    name: "lao People's Democratic Republic"
  },
  {
    code: "lv",
    name: "latvia"
  },
  {
    code: "lb",
    name: "lebanon"
  },
  {
    code: "ls",
    name: "lesotho"
  },
  {
    code: "lr",
    name: "liberia"
  },
  {
    code: "ly",
    name: "libyan Arab Jamahiriya"
  },
  {
    code: "li",
    name: "liechtenstein"
  },
  {
    code: "lt",
    name: "lithuania"
  },
  {
    code: "lu",
    name: "luxembourg"
  },
  {
    code: "mo",
    name: "macao"
  },
  {
    code: "mk",
    name: "macedonia"
  },
  {
    code: "mg",
    name: "madagascar"
  },
  {
    code: "mw",
    name: "malawi"
  },
  {
    code: "my",
    name: "malaysia"
  },
  {
    code: "mv",
    name: "maldives"
  },
  {
    code: "ml",
    name: "mali"
  },
  {
    code: "mt",
    name: "malta"
  },
  {
    code: "mh",
    name: "marshall Islands"
  },
  {
    code: "mq",
    name: "martinique"
  },
  {
    code: "mr",
    name: "mauritania"
  },
  {
    code: "mu",
    name: "mauritius"
  },
  {
    code: "yt",
    name: "mayotte"
  },
  {
    code: "mx",
    name: "mexico"
  },
  {
    code: "fm",
    name: "micronesia, Federated States Of"
  },
  {
    code: "md",
    name: "moldova"
  },
  {
    code: "mc",
    name: "monaco"
  },
  {
    code: "mn",
    name: "mongolia"
  },
  {
    code: "me",
    name: "montenegro"
  },
  {
    code: "ms",
    name: "montserrat"
  },
  {
    code: "ma",
    name: "morocco"
  },
  {
    code: "mz",
    name: "mozambique"
  },
  {
    code: "mm",
    name: "myanmar"
  },
  {
    code: "na",
    name: "namibia"
  },
  {
    code: "nr",
    name: "nauru"
  },
  {
    code: "np",
    name: "nepal"
  },
  {
    code: "nl",
    name: "netherlands"
  },
  {
    code: "an",
    name: "netherlands Antilles"
  },
  {
    code: "nc",
    name: "new Caledonia"
  },
  {
    code: "nz",
    name: "new Zealand"
  },
  {
    code: "ni",
    name: "nicaragua"
  },
  {
    code: "ne",
    name: "niger"
  },
  {
    code: "ng",
    name: "nigeria"
  },
  {
    code: "nu",
    name: "niue"
  },
  {
    code: "nf",
    name: "norfolk Island"
  },
  {
    code: "mp",
    name: "northern Mariana Islands"
  },
  {
    code: "no",
    name: "norway"
  },
  {
    code: "om",
    name: "oman"
  },
  {
    code: "pk",
    name: "pakistan"
  },
  {
    code: "pw",
    name: "palau"
  },
  {
    code: "ps",
    name: "palestinian Territory, Occupied"
  },
  {
    code: "pa",
    name: "panama"
  },
  {
    code: "pg",
    name: "papua New Guinea"
  },
  {
    code: "py",
    name: "paraguay"
  },
  {
    code: "pe",
    name: "peru"
  },
  {
    code: "ph",
    name: "philippines"
  },
  {
    code: "pn",
    name: "pitcairn"
  },
  {
    code: "pl",
    name: "poland"
  },
  {
    code: "pt",
    name: "portugal"
  },
  {
    code: "pr",
    name: "puerto Rico"
  },
  {
    code: "qa",
    name: "qatar"
  },
  {
    code: "re",
    name: "reunion"
  },
  {
    code: "ro",
    name: "romania"
  },
  {
    code: "ru",
    name: "russia"
  },
  {
    code: "rw",
    name: "rwanda"
  },
  {
    code: "bl",
    name: "saint Barthelemy"
  },
  {
    code: "sh",
    name: "saint Helena"
  },
  {
    code: "kn",
    name: "saint Kitts And Nevis"
  },
  {
    code: "lc",
    name: "saint Lucia"
  },
  {
    code: "mf",
    name: "saint Martin"
  },
  {
    code: "pm",
    name: "saint Pierre And Miquelon"
  },
  {
    code: "vc",
    name: "saint Vincent And Grenadines"
  },
  {
    code: "ws",
    name: "samoa"
  },
  {
    code: "sm",
    name: "san Marino"
  },
  {
    code: "st",
    name: "sao Tome And Principe"
  },
  {
    code: "sa",
    name: "saudi Arabia"
  },
  {
    code: "sn",
    name: "senegal"
  },
  {
    code: "rs",
    name: "serbia"
  },
  {
    code: "sc",
    name: "seychelles"
  },
  {
    code: "sl",
    name: "sierra Leone"
  },
  {
    code: "sg",
    name: "singapore"
  },
  {
    code: "sk",
    name: "slovakia"
  },
  {
    code: "si",
    name: "slovenia"
  },
  {
    code: "sb",
    name: "solomon Islands"
  },
  {
    code: "so",
    name: "somalia"
  },
  {
    code: "za",
    name: "south Africa"
  },
  {
    code: "gs",
    name: "south Georgia And Sandwich Isl."
  },
  {
    code: "es",
    name: "spain"
  },
  {
    code: "lk",
    name: "sri Lanka"
  },
  {
    code: "sd",
    name: "sudan"
  },
  {
    code: "sr",
    name: "suriname"
  },
  {
    code: "sj",
    name: "svalbard And Jan Mayen"
  },
  {
    code: "sz",
    name: "swaziland"
  },
  {
    code: "se",
    name: "sweden"
  },
  {
    code: "ch",
    name: "switzerland"
  },
  {
    code: "sy",
    name: "syrian Arab Republic"
  },
  {
    code: "tw",
    name: "taiwan"
  },
  {
    code: "tj",
    name: "tajikistan"
  },
  {
    code: "tz",
    name: "tanzania"
  },
  {
    code: "th",
    name: "thailand"
  },
  {
    code: "tl",
    name: "timor-Leste"
  },
  {
    code: "tg",
    name: "togo"
  },
  {
    code: "tk",
    name: "tokelau"
  },
  {
    code: "to",
    name: "tonga"
  },
  {
    code: "tt",
    name: "trinidad And Tobago"
  },
  {
    code: "tn",
    name: "tunisia"
  },
  {
    code: "tr",
    name: "turkey"
  },
  {
    code: "tm",
    name: "turkmenistan"
  },
  {
    code: "tc",
    name: "turks And Caicos Islands"
  },
  {
    code: "tv",
    name: "tuvalu"
  },
  {
    code: "ug",
    name: "uganda"
  },
  {
    code: "ua",
    name: "ukraine"
  },
  {
    code: "ae",
    name: "united Arab Emirates"
  },
  {
    code: "gb",
    name: "united Kingdom"
  },
  {
    code: "us",
    name: "united states"
  },
  {
    code: "us",
    name: "usa"
  },
  {
    code: "um",
    name: "united States Outlying Islands"
  },
  {
    code: "uy",
    name: "uruguay"
  },
  {
    code: "uz",
    name: "uzbekistan"
  },
  {
    code: "vu",
    name: "vanuatu"
  },
  {
    code: "ve",
    name: "venezuela"
  },
  {
    code: "vn",
    name: "viet Nam"
  },
  {
    code: "vg",
    name: "virgin Islands, British"
  },
  {
    code: "vi",
    name: "virgin Islands, U.S."
  },
  {
    code: "wf",
    name: "wallis And Futuna"
  },
  {
    code: "eh",
    name: "western Sahara"
  },
  {
    code: "ye",
    name: "yemen"
  },
  {
    code: "zm",
    name: "zambia"
  },
  {
    code: "zw",
    name: "zimbabwe"
  }
];


export default countryCodeArr