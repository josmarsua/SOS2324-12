const API_BASE_JMR = "/api/v2/world-consumption-of-drinking-water-data";

let initialData = [
    {
        "iso_code": "DEU",
        "country": "Germany",
        "year": 2010,
        "urban_improved_total": 45,
        "urban_improved_piped": 25,
        "urban_improved_other": 20,
        "urban_unimproved_other": 10,
        "rural_improved_total": 30,
        "rural_improved_piped": 8,
        "rural_improved_other": 22,
        "rural_unimproved_other": 6,
        "rural_unimproved_surface": 12,
        "total_improved_total": 75,
        "total_improved_piped": 33,
        "total_improved_other": 42,
        "total_unimproved_other": 16,
        "total_unimproved_surface": 18
    },
    {
        "iso_code": "BRA",
        "country": "Brazil",
        "year": 2008,
        "urban_improved_total": 35,
        "urban_improved_piped": 18,
        "urban_improved_other": 17,
        "urban_unimproved_other": 9,
        "rural_improved_total": 20,
        "rural_improved_piped": 4,
        "rural_improved_other": 16,
        "rural_unimproved_other": 3,
        "rural_unimproved_surface": 7,
        "total_improved_total": 55,
        "total_improved_piped": 22,
        "total_improved_other": 33,
        "total_unimproved_other": 12,
        "total_unimproved_surface": 10
    },
    {
        "iso_code": "MEX",
        "country": "Mexico",
        "year": 2012,
        "urban_improved_total": 25,
        "urban_improved_piped": 12,
        "urban_improved_other": 13,
        "urban_unimproved_other": 7,
        "rural_improved_total": 18,
        "rural_improved_piped": 3,
        "rural_improved_other": 15,
        "rural_unimproved_other": 4,
        "rural_unimproved_surface": 8,
        "total_improved_total": 43,
        "total_improved_piped": 15,
        "total_improved_other": 28,
        "total_unimproved_other": 11,
        "total_unimproved_surface": 9
    },
    {
        "iso_code": "THA",
        "country": "Thailand",
        "year": 2019,
        "urban_improved_total": 55,
        "urban_improved_piped": 30,
        "urban_improved_other": 25,
        "urban_unimproved_other": 15,
        "rural_improved_total": 40,
        "rural_improved_piped": 10,
        "rural_improved_other": 30,
        "rural_unimproved_other": 8,
        "rural_unimproved_surface": 12,
        "total_improved_total": 95,
        "total_improved_piped": 40,
        "total_improved_other": 55,
        "total_unimproved_other": 23,
        "total_unimproved_surface": 27
    },
    {
        "iso_code": "JPN",
        "country": "Japan",
        "year": 2017,
        "urban_improved_total": 60,
        "urban_improved_piped": 35,
        "urban_improved_other": 25,
        "urban_unimproved_other": 20,
        "rural_improved_total": 50,
        "rural_improved_piped": 15,
        "rural_improved_other": 35,
        "rural_unimproved_other": 10,
        "rural_unimproved_surface": 15,
        "total_improved_total": 110,
        "total_improved_piped": 50,
        "total_improved_other": 60,
        "total_unimproved_other": 30,
        "total_unimproved_surface": 35
    },
    {
        "iso_code": "CHN",
        "country": "China",
        "year": 2014,
        "urban_improved_total": 70,
        "urban_improved_piped": 40,
        "urban_improved_other": 30,
        "urban_unimproved_other": 25,
        "rural_improved_total": 55,
        "rural_improved_piped": 20,
        "rural_improved_other": 35,
        "rural_unimproved_other": 15,
        "rural_unimproved_surface": 20,
        "total_improved_total": 125,
        "total_improved_piped": 60,
        "total_improved_other": 65,
        "total_unimproved_other": 40,
        "total_unimproved_surface": 45
    },
    {
        "iso_code": "RUS",
        "country": "Russia",
        "year": 2016,
        "urban_improved_total": 50,
        "urban_improved_piped": 25,
        "urban_improved_other": 25,
        "urban_unimproved_other": 18,
        "rural_improved_total": 35,
        "rural_improved_piped": 5,
        "rural_improved_other": 30,
        "rural_unimproved_other": 6,
        "rural_unimproved_surface": 15,
        "total_improved_total": 85,
        "total_improved_piped": 30,
        "total_improved_other": 55,
        "total_unimproved_other": 24,
        "total_unimproved_surface": 33
    },
    {
        "iso_code": "EGY",
        "country": "Egypt",
        "year": 2013,
        "urban_improved_total": 40,
        "urban_improved_piped": 20,
        "urban_improved_other": 20,
        "urban_unimproved_other": 12,
        "rural_improved_total": 25,
        "rural_improved_piped": 5,
        "rural_improved_other": 20,
        "rural_unimproved_other": 3,
        "rural_unimproved_surface": 10,
        "total_improved_total": 65,
        "total_improved_piped": 25,
        "total_improved_other": 40,
        "total_unimproved_other": 15,
        "total_unimproved_surface": 18
    },
    {
        "iso_code": "IND",
        "country": "India",
        "year": 2011,
        "urban_improved_total": 65,
        "urban_improved_piped": 30,
        "urban_improved_other": 35,
        "urban_unimproved_other": 20,
        "rural_improved_total": 45,
        "rural_improved_piped": 10,
        "rural_improved_other": 35,
        "rural_unimproved_other": 8,
        "rural_unimproved_surface": 12,
        "total_improved_total": 110,
        "total_improved_piped": 40,
        "total_improved_other": 70,
        "total_unimproved_other": 28,
        "total_unimproved_surface": 25
    },
    {
        "iso_code": "ESP",
        "country": "Spain",
        "year": 2020,
        "urban_improved_total": 55,
        "urban_improved_piped": 30,
        "urban_improved_other": 25,
        "urban_unimproved_other": 15,
        "rural_improved_total": 40,
        "rural_improved_piped": 10,
        "rural_improved_other": 30,
        "rural_unimproved_other": 8,
        "rural_unimproved_surface": 12,
        "total_improved_total": 95,
        "total_improved_piped": 40,
        "total_improved_other": 55,
        "total_unimproved_other": 23,
        "total_unimproved_surface": 27
    },
    {
        "iso_code": "GBR",
        "country": "United Kingdom",
        "year": 2018,
        "urban_improved_total": 60,
        "urban_improved_piped": 35,
        "urban_improved_other": 25,
        "urban_unimproved_other": 20,
        "rural_improved_total": 50,
        "rural_improved_piped": 15,
        "rural_improved_other": 35,
        "rural_unimproved_other": 10,
        "rural_unimproved_surface": 15,
        "total_improved_total": 110,
        "total_improved_piped": 50,
        "total_improved_other": 60,
        "total_unimproved_other": 30,
        "total_unimproved_surface": 35
    },
    {
        "iso_code": "AFG",
        "country": "Afghanistan",
        "year": 1990,
        "urban_improved_total": 20,
        "urban_improved_piped": 8,
        "urban_improved_other": 12,
        "urban_unimproved_other": 5,
        "rural_improved_total": 15,
        "rural_improved_piped": 3,
        "rural_improved_other": 10,
        "rural_unimproved_other": 2,
        "rural_unimproved_surface": 5,
        "total_improved_total": 35,
        "total_improved_piped": 11,
        "total_improved_other": 22,
        "total_unimproved_other": 7,
        "total_unimproved_surface": 6
    },
    {
        "iso_code": "CAN",
        "country": "Canada",
        "year": 2005,
        "urban_improved_total": 30,
        "urban_improved_piped": 15,
        "urban_improved_other": 15,
        "urban_unimproved_other": 8,
        "rural_improved_total": 25,
        "rural_improved_piped": 5,
        "rural_improved_other": 20,
        "rural_unimproved_other": 3,
        "rural_unimproved_surface": 10,
        "total_improved_total": 55,
        "total_improved_piped": 20,
        "total_improved_other": 35,
        "total_unimproved_other": 11,
        "total_unimproved_surface": 16
    },
    {
        "iso_code": "FRA",
        "country": "France",
        "year": 2015,
        "urban_improved_total": 40,
        "urban_improved_piped": 20,
        "urban_improved_other": 20,
        "urban_unimproved_other": 12,
        "rural_improved_total": 35,
        "rural_improved_piped": 7,
        "rural_improved_other": 28,
        "rural_unimproved_other": 5,
        "rural_unimproved_surface": 15,
        "total_improved_total": 75,
        "total_improved_piped": 27,
        "total_improved_other": 48,
        "total_unimproved_other": 17,
        "total_unimproved_surface": 18
    },
    {
        "iso_code": "AFG",
        "country": "Afghanistan",
        "year": 1990,
        "urban_improved_total": "-",
        "urban_improved_piped": 3,
        "urban_improved_other": "-",
        "urban_unimproved_other": "-",
        "rural_improved_total": "-",
        "rural_improved_piped": "-",
        "rural_improved_other": 0,
        "rural_unimproved_other": "-",
        "rural_unimproved_surface": "-",
        "total_improved_total": "-",
        "total_improved_piped": 1,
        "total_improved_other": "-",
        "total_unimproved_other": "-",
        "total_unimproved_surface": "-"
    },
    {
        "iso_code": "AFG",
        "country": "Afghanistan",
        "year": 2015,
        "urban_improved_total": 78,
        "urban_improved_piped": 31,
        "urban_improved_other": 47,
        "urban_unimproved_other": 20,
        "rural_improved_total": 2,
        "rural_improved_piped": 47,
        "rural_improved_other": 5,
        "rural_unimproved_other": 42,
        "rural_unimproved_surface": 46,
        "total_improved_total": 7,
        "total_improved_piped": 55,
        "total_improved_other": 12,
        "total_unimproved_other": 43,
        "total_unimproved_surface": 39
    },
    {
        "iso_code": "ALB",
        "country": "Albania",
        "year": 1990,
        "urban_improved_total": 100,
        "urban_improved_piped": 98,
        "urban_improved_other": 2,
        "urban_unimproved_other": 0,
        "rural_improved_total": 0,
        "rural_improved_piped": "-",
        "rural_improved_other": "-",
        "rural_unimproved_other": "-",
        "rural_unimproved_surface": "-",
        "total_improved_total": "-",
        "total_improved_piped": "-",
        "total_improved_other": "-",
        "total_unimproved_other": "-",
        "total_unimproved_surface": "-"
    },
    {
        "iso_code": "ALB",
        "country": "Albania",
        "year": 2015,
        "urban_improved_total": 95,
        "urban_improved_piped": 86,
        "urban_improved_other": 9,
        "urban_unimproved_other": 5,
        "rural_improved_total": 0,
        "rural_improved_piped": 95,
        "rural_improved_other": 76,
        "rural_unimproved_other": 19,
        "rural_unimproved_surface": 5,
        "total_improved_total": 0,
        "total_improved_piped": 95,
        "total_improved_other": 82,
        "total_unimproved_other": 13,
        "total_unimproved_surface": 5
    },
    {
        "iso_code": "DZA",
        "country": "Algeria",
        "year": 1990,
        "urban_improved_total": 97,
        "urban_improved_piped": 87,
        "urban_improved_other": 10,
        "urban_unimproved_other": 3,
        "rural_improved_total": 0,
        "rural_improved_piped": 85,
        "rural_improved_other": 47,
        "rural_unimproved_other": 38,
        "rural_unimproved_surface": 13,
        "total_improved_total": 2,
        "total_improved_piped": 91,
        "total_improved_other": 67,
        "total_unimproved_other": 24,
        "total_unimproved_surface": 8
    },
    {
        "iso_code": "DZA",
        "country": "Algeria",
        "year": 2015,
        "urban_improved_total": 84,
        "urban_improved_piped": 82,
        "urban_improved_other": 2,
        "urban_unimproved_other": 16,
        "rural_improved_total": 0,
        "rural_improved_piped": 82,
        "rural_improved_other": 64,
        "rural_unimproved_other": 18,
        "rural_unimproved_surface": 18,
        "total_improved_total": 0,
        "total_improved_piped": 84,
        "total_improved_other": 77,
        "total_unimproved_other": 7,
        "total_unimproved_surface": 16
    },
    {
        "iso_code": "ASM",
        "country": "American Samoa",
        "year": 1990,
        "urban_improved_total": "-",
        "urban_improved_piped": "-",
        "urban_improved_other": "-",
        "urban_unimproved_other": "-",
        "rural_improved_total": "-",
        "rural_improved_piped": "-",
        "rural_improved_other": "-",
        "rural_unimproved_other": "-",
        "rural_unimproved_surface": "-",
        "total_improved_total": 94,
        "total_improved_piped": 65,
        "total_improved_other": 29,
        "total_unimproved_other": 6,
        "total_unimproved_surface": "-"
    },
    {
        "iso_code": "ASM",
        "country": "American Samoa",
        "year": 2015,
        "urban_improved_total": "-",
        "urban_improved_piped": "-",
        "urban_improved_other": "-",
        "urban_unimproved_other": "-",
        "rural_improved_total": "-",
        "rural_improved_piped": "-",
        "rural_improved_other": "-",
        "rural_unimproved_other": "-",
        "rural_unimproved_surface": "-",
        "total_improved_total": 100,
        "total_improved_piped": 92,
        "total_improved_other": 8,
        "total_unimproved_other": 0,
        "total_unimproved_surface": 0
    },
    {
        "iso_code": "AND",
        "country": "Andorra",
        "year": 1990,
        "urban_improved_total": 100,
        "urban_improved_piped": 100,
        "urban_improved_other": 0,
        "urban_unimproved_other": 0,
        "rural_improved_total": 0,
        "rural_improved_piped": 100,
        "rural_improved_other": 100,
        "rural_unimproved_other": 0,
        "rural_unimproved_surface": 0,
        "total_improved_total": 100,
        "total_improved_piped": 100,
        "total_improved_other": 100,
        "total_unimproved_other": 0,
        "total_unimproved_surface": 0
    },
    {
        "iso_code": "AND",
        "country": "Andorra",
        "year": 2015,
        "urban_improved_total": 100,
        "urban_improved_piped": 100,
        "urban_improved_other": 0,
        "urban_unimproved_other": 0,
        "rural_improved_total": 0,
        "rural_improved_piped": 100,
        "rural_improved_other": 100,
        "rural_unimproved_other": 0,
        "rural_unimproved_surface": 0,
        "total_improved_total": 100,
        "total_improved_piped": 100,
        "total_improved_other": 100,
        "total_unimproved_other": 0,
        "total_unimproved_surface": 0
    },
    {
        "iso_code": "AGO",
        "country": "Angola",
        "year": 1990,
        "urban_improved_total": 52,
        "urban_improved_piped": 19,
        "urban_improved_other": 33,
        "urban_unimproved_other": 44,
        "rural_improved_total": 4,
        "rural_improved_piped": 44,
        "rural_improved_other": 1,
        "rural_unimproved_other": 43,
        "rural_unimproved_surface": 26,
        "total_improved_total": 30,
        "total_improved_piped": 46,
        "total_improved_other": 5,
        "total_unimproved_other": 41,
        "total_unimproved_surface": 30
    },
    {
        "iso_code": "AGO",
        "country": "Angola",
        "year": 2015,
        "urban_improved_total": 75,
        "urban_improved_piped": 32,
        "urban_improved_other": 43,
        "urban_unimproved_other": 21,
        "rural_improved_total": 4,
        "rural_improved_piped": 28,
        "rural_improved_other": 2,
        "rural_unimproved_other": 26,
        "rural_unimproved_surface": 21,
        "total_improved_total": 51,
        "total_improved_piped": 49,
        "total_improved_other": 15,
        "total_unimproved_other": 34,
        "total_unimproved_surface": 20
    },
    {
        "iso_code": "AIA",
        "country": "Anguilla",
        "year": 1990,
        "urban_improved_total": "-",
        "urban_improved_piped": "-",
        "urban_improved_other": "-",
        "urban_unimproved_other": "-",
        "rural_improved_total": "-",
        "rural_improved_piped": "-",
        "rural_improved_other": "-",
        "rural_unimproved_other": "-",
        "rural_unimproved_surface": "-",
        "total_improved_total": "-",
        "total_improved_piped": "-",
        "total_improved_other": "-",
        "total_unimproved_other": "-",
        "total_unimproved_surface": "-"
    },
    {
        "iso_code": "AIA",
        "country": "Anguilla",
        "year": 2015,
        "urban_improved_total": 95,
        "urban_improved_piped": "-",
        "urban_improved_other": "-",
        "urban_unimproved_other": 5,
        "rural_improved_total": "-",
        "rural_improved_piped": "-",
        "rural_improved_other": "-",
        "rural_unimproved_other": "-",
        "rural_unimproved_surface": "-",
        "total_improved_total": 95,
        "total_improved_piped": "-",
        "total_improved_other": "-",
        "total_unimproved_other": 5,
        "total_unimproved_surface": "-"
    },
    {
        "iso_code": "ATG",
        "country": "Antigua and Barbuda",
        "year": 1990,
        "urban_improved_total": "-",
        "urban_improved_piped": "-",
        "urban_improved_other": "-",
        "urban_unimproved_other": "-",
        "rural_improved_total": "-",
        "rural_improved_piped": "-",
        "rural_improved_other": "-",
        "rural_unimproved_other": "-",
        "rural_unimproved_surface": "-",
        "total_improved_total": 97,
        "total_improved_piped": 61,
        "total_improved_other": 36,
        "total_unimproved_other": 3,
        "total_unimproved_surface": "-"
    },
    {
        "iso_code": "ATG",
        "country": "Antigua and Barbuda",
        "year": 2015,
        "urban_improved_total": "-",
        "urban_improved_piped": "-",
        "urban_improved_other": "-",
        "urban_unimproved_other": "-",
        "rural_improved_total": "-",
        "rural_improved_piped": "-",
        "rural_improved_other": "-",
        "rural_unimproved_other": "-",
        "rural_unimproved_surface": "-",
        "total_improved_total": 98,
        "total_improved_piped": "-",
        "total_improved_other": "-",
        "total_unimproved_other": 2,
        "total_unimproved_surface": "-"
    },
    {
        "iso_code": "ARG",
        "country": "Argentina",
        "year": 1990,
        "urban_improved_total": 98,
        "urban_improved_piped": 94,
        "urban_improved_other": 4,
        "urban_unimproved_other": 2,
        "rural_improved_total": 0,
        "rural_improved_piped": 69,
        "rural_improved_other": 41,
        "rural_unimproved_other": 28,
        "rural_unimproved_surface": 19,
        "total_improved_total": 12,
        "total_improved_piped": 94,
        "total_improved_other": 87,
        "total_unimproved_other": 7,
        "total_unimproved_surface": 4
    },
    {
        "iso_code": "ARG",
        "country": "Argentina",
        "year": 2015,
        "urban_improved_total": "-",
        "urban_improved_piped": "-",
        "urban_improved_other": "-",
        "urban_unimproved_other": "-",
        "rural_improved_total": "-",
        "rural_improved_piped": "-",
        "rural_improved_other": "-",
        "rural_unimproved_other": "-",
        "rural_unimproved_surface": "-",
        "total_improved_total": "-",
        "total_improved_piped": "-",
        "total_improved_other": "-",
        "total_unimproved_other": "-",
        "total_unimproved_surface": "-"
    },
    {
        "iso_code": "BGR",
        "country": "Bulgaria",
        "year": 1990,
        "urban_improved_total": 100,
        "urban_improved_piped": 96,
        "urban_improved_other": 4,
        "urban_unimproved_other": 0,
        "rural_improved_total": 0,
        "rural_improved_piped": 100,
        "rural_improved_other": 66,
        "rural_unimproved_other": 34,
        "rural_unimproved_surface": 0,
        "total_improved_total": 0,
        "total_improved_piped": 100,
        "total_improved_other": 86,
        "total_unimproved_other": 14,
        "total_unimproved_surface": 0
    },
    {
        "iso_code": "BGR",
        "country": "Bulgaria",
        "year": 2015,
        "urban_improved_total": 100,
        "urban_improved_piped": 99,
        "urban_improved_other": 1,
        "urban_unimproved_other": 0,
        "rural_improved_total": 0,
        "rural_improved_piped": 99,
        "rural_improved_other": 99,
        "rural_unimproved_other": 0,
        "rural_unimproved_surface": 0,
        "total_improved_total": 1,
        "total_improved_piped": 99,
        "total_improved_other": 99,
        "total_unimproved_other": 0,
        "total_unimproved_surface": 1
    },
    {
        "iso_code": "BFA",
        "country": "Burkina Faso",
        "year": 1990,
        "urban_improved_total": 75,
        "urban_improved_piped": 11,
        "urban_improved_other": 64,
        "urban_unimproved_other": 24,
        "rural_improved_total": 1,
        "rural_improved_piped": 39,
        "rural_improved_other": 0,
        "rural_unimproved_other": 39,
        "rural_unimproved_surface": 51,
        "total_improved_total": 10,
        "total_improved_piped": 44,
        "total_improved_other": 2,
        "total_unimproved_other": 42,
        "total_unimproved_surface": 48
    },
    {
        "iso_code": "BFA",
        "country": "Burkina Faso",
        "year": 2015,
        "urban_improved_total": 97,
        "urban_improved_piped": 27,
        "urban_improved_other": 70,
        "urban_unimproved_other": 3,
        "rural_improved_total": 0,
        "rural_improved_piped": 76,
        "rural_improved_other": 0,
        "rural_unimproved_other": 76,
        "rural_unimproved_surface": 19,
        "total_improved_total": 5,
        "total_improved_piped": 82,
        "total_improved_other": 8,
        "total_unimproved_other": 74,
        "total_unimproved_surface": 15
    },
    {
        "iso_code": "BDI",
        "country": "Burundi",
        "year": 1990,
        "urban_improved_total": 96,
        "urban_improved_piped": 32,
        "urban_improved_other": 64,
        "urban_unimproved_other": 2,
        "rural_improved_total": 2,
        "rural_improved_piped": 67,
        "rural_improved_other": 1,
        "rural_unimproved_other": 66,
        "rural_unimproved_surface": 23,
        "total_improved_total": 10,
        "total_improved_piped": 69,
        "total_improved_other": 3,
        "total_unimproved_other": 66,
        "total_unimproved_surface": 21
    },
    {
        "iso_code": "BDI",
        "country": "Burundi",
        "year": 2015,
        "urban_improved_total": 91,
        "urban_improved_piped": 49,
        "urban_improved_other": 42,
        "urban_unimproved_other": 4,
        "rural_improved_total": 5,
        "rural_improved_piped": 74,
        "rural_improved_other": 1,
        "rural_unimproved_other": 73,
        "rural_unimproved_surface": 13,
        "total_improved_total": 13,
        "total_improved_piped": 76,
        "total_improved_other": 7,
        "total_unimproved_other": 69,
        "total_unimproved_surface": 12
    },
    {
        "iso_code": "KHM",
        "country": "Cambodia",
        "year": 1990,
        "urban_improved_total": 34,
        "urban_improved_piped": 15,
        "urban_improved_other": 19,
        "urban_unimproved_other": 40,
        "rural_improved_total": 26,
        "rural_improved_piped": 22,
        "rural_improved_other": 0,
        "rural_unimproved_other": 22,
        "rural_unimproved_surface": 42,
        "total_improved_total": 36,
        "total_improved_piped": 23,
        "total_improved_other": 2,
        "total_unimproved_other": 21,
        "total_unimproved_surface": 42
    },
    {
        "iso_code": "KHM",
        "country": "Cambodia",
        "year": 2015,
        "urban_improved_total": 100,
        "urban_improved_piped": 75,
        "urban_improved_other": 25,
        "urban_unimproved_other": 0,
        "rural_improved_total": 0,
        "rural_improved_piped": 69,
        "rural_improved_other": 7,
        "rural_unimproved_other": 62,
        "rural_unimproved_surface": 16,
        "total_improved_total": 15,
        "total_improved_piped": 76,
        "total_improved_other": 21,
        "total_unimproved_other": 55,
        "total_unimproved_surface": 12
    },
    {
        "iso_code": "CMR",
        "country": "Cameroon",
        "year": 1990,
        "urban_improved_total": 78,
        "urban_improved_piped": 25,
        "urban_improved_other": 53,
        "urban_unimproved_other": 20,
        "rural_improved_total": 2,
        "rural_improved_piped": 34,
        "rural_improved_other": 2,
        "rural_unimproved_other": 32,
        "rural_unimproved_surface": 44,
        "total_improved_total": 22,
        "total_improved_piped": 51,
        "total_improved_other": 11,
        "total_unimproved_other": 40,
        "total_unimproved_surface": 35
    },
    {
        "iso_code": "CMR",
        "country": "Cameroon",
        "year": 2015,
        "urban_improved_total": 95,
        "urban_improved_piped": 28,
        "urban_improved_other": 67,
        "urban_unimproved_other": 4,
        "rural_improved_total": 1,
        "rural_improved_piped": 53,
        "rural_improved_other": 4,
        "rural_unimproved_other": 49,
        "rural_unimproved_surface": 31,
        "total_improved_total": 16,
        "total_improved_piped": 76,
        "total_improved_other": 17,
        "total_unimproved_other": 59,
        "total_unimproved_surface": 16
    },
    {
        "iso_code": "CAN",
        "country": "Canada",
        "year": 1990,
        "urban_improved_total": 100,
        "urban_improved_piped": 100,
        "urban_improved_other": 0,
        "urban_unimproved_other": 0,
        "rural_improved_total": 0,
        "rural_improved_piped": 99,
        "rural_improved_other": "-",
        "rural_unimproved_other": "-",
        "rural_unimproved_surface": "-",
        "total_improved_total": 100,
        "total_improved_piped": 100,
        "total_improved_other": "-",
        "total_unimproved_other": "-",
        "total_unimproved_surface": 0
    },
    {
        "iso_code": "CAN",
        "country": "Canada",
        "year": 2015,
        "urban_improved_total": 100,
        "urban_improved_piped": 100,
        "urban_improved_other": 0,
        "urban_unimproved_other": 0,
        "rural_improved_total": 0,
        "rural_improved_piped": 99,
        "rural_improved_other": "-",
        "rural_unimproved_other": "-",
        "rural_unimproved_surface": "-",
        "total_improved_total": 100,
        "total_improved_piped": 100,
        "total_improved_other": "-",
        "total_unimproved_other": "-",
        "total_unimproved_surface": 0
    },
    {
        "iso_code": "CPV",
        "country": "Cape Verde",
        "year": 1990,
        "urban_improved_total": "-",
        "urban_improved_piped": "-",
        "urban_improved_other": "-",
        "urban_unimproved_other": "-",
        "rural_improved_total": "-",
        "rural_improved_piped": 0,
        "rural_improved_other": "-",
        "rural_unimproved_other": "-",
        "rural_unimproved_surface": "-",
        "total_improved_total": "-",
        "total_improved_piped": "-",
        "total_improved_other": "-",
        "total_unimproved_other": "-",
        "total_unimproved_surface": "-"
    },
    {
        "iso_code": "CPV",
        "country": "Cape Verde",
        "year": 2015,
        "urban_improved_total": 94,
        "urban_improved_piped": 63,
        "urban_improved_other": 31,
        "urban_unimproved_other": 6,
        "rural_improved_total": 0,
        "rural_improved_piped": 87,
        "rural_improved_other": 53,
        "rural_unimproved_other": 34,
        "rural_unimproved_surface": 13,
        "total_improved_total": 0,
        "total_improved_piped": 92,
        "total_improved_other": 59,
        "total_unimproved_other": 33,
        "total_unimproved_surface": 8
    },
    {
        "iso_code": "CYM",
        "country": "Cayman Islands",
        "year": 1990,
        "urban_improved_total": "-",
        "urban_improved_piped": "-",
        "urban_improved_other": "-",
        "urban_unimproved_other": "-",
        "rural_improved_total": "-",
        "rural_improved_piped": "-",
        "rural_improved_other": "-",
        "rural_unimproved_other": "-",
        "rural_unimproved_surface": "-",
        "total_improved_total": "-",
        "total_improved_piped": "-",
        "total_improved_other": "-",
        "total_unimproved_other": "-",
        "total_unimproved_surface": "-"
    },
    {
        "iso_code": "CYM",
        "country": "Cayman Islands",
        "year": 2015,
        "urban_improved_total": 97,
        "urban_improved_piped": 91,
        "urban_improved_other": 6,
        "urban_unimproved_other": 3,
        "rural_improved_total": "-",
        "rural_improved_piped": "-",
        "rural_improved_other": "-",
        "rural_unimproved_other": "-",
        "rural_unimproved_surface": "-",
        "total_improved_total": 97,
        "total_improved_piped": 91,
        "total_improved_other": 6,
        "total_unimproved_other": 3,
        "total_unimproved_surface": "-"
    },
    {
        "iso_code": "CAF",
        "country": "Central African Republic",
        "year": 1990,
        "urban_improved_total": 80,
        "urban_improved_piped": 8,
        "urban_improved_other": 72,
        "urban_unimproved_other": 18,
        "rural_improved_total": 2,
        "rural_improved_piped": 46,
        "rural_improved_other": 0,
        "rural_unimproved_other": 46,
        "rural_unimproved_surface": 35,
        "total_improved_total": 19,
        "total_improved_piped": 59,
        "total_improved_other": 3,
        "total_unimproved_other": 56,
        "total_unimproved_surface": 28
    },
    {
        "iso_code": "CAF",
        "country": "Central African Republic",
        "year": 2015,
        "urban_improved_total": 90,
        "urban_improved_piped": 4,
        "urban_improved_other": 86,
        "urban_unimproved_other": 10,
        "rural_improved_total": 0,
        "rural_improved_piped": 54,
        "rural_improved_other": 0,
        "rural_unimproved_other": 54,
        "rural_unimproved_surface": 41,
        "total_improved_total": 5,
        "total_improved_piped": 68,
        "total_improved_other": 2,
        "total_unimproved_other": 66,
        "total_unimproved_surface": 29
    },
    {
        "iso_code": "TCD",
        "country": "Chad",
        "year": 1990,
        "urban_improved_total": 49,
        "urban_improved_piped": 7,
        "urban_improved_other": 42,
        "urban_unimproved_other": 48,
        "rural_improved_total": 3,
        "rural_improved_piped": 37,
        "rural_improved_other": 0,
        "rural_unimproved_other": 37,
        "rural_unimproved_surface": 47,
        "total_improved_total": 16,
        "total_improved_piped": 40,
        "total_improved_other": 2,
        "total_unimproved_other": 38,
        "total_unimproved_surface": 46
    },
    {
        "iso_code": "TCD",
        "country": "Chad",
        "year": 2015,
        "urban_improved_total": 72,
        "urban_improved_piped": 25,
        "urban_improved_other": 47,
        "urban_unimproved_other": 28,
        "rural_improved_total": 0,
        "rural_improved_piped": 45,
        "rural_improved_other": 1,
        "rural_unimproved_other": 44,
        "rural_unimproved_surface": 52,
        "total_improved_total": 3,
        "total_improved_piped": 51,
        "total_improved_other": 6,
        "total_unimproved_other": 45,
        "total_unimproved_surface": 46
    },
    {
        "iso_code": "CHL",
        "country": "Chile",
        "year": 1990,
        "urban_improved_total": 99,
        "urban_improved_piped": 98,
        "urban_improved_other": 1,
        "urban_unimproved_other": 1,
        "rural_improved_total": 0,
        "rural_improved_piped": 48,
        "rural_improved_other": 38,
        "rural_unimproved_other": 10,
        "rural_unimproved_surface": 25,
        "total_improved_total": 27,
        "total_improved_piped": 90,
        "total_improved_other": 88,
        "total_unimproved_other": 2,
        "total_unimproved_surface": 5
    },
    {
        "iso_code": "CHL",
        "country": "Chile",
        "year": 2015,
        "urban_improved_total": 100,
        "urban_improved_piped": 100,
        "urban_improved_other": 0,
        "urban_unimproved_other": 0,
        "rural_improved_total": 0,
        "rural_improved_piped": 89,
        "rural_improved_other": 73,
        "rural_unimproved_other": 16,
        "rural_unimproved_surface": 11,
        "total_improved_total": 4,
        "total_improved_piped": 92,
        "total_improved_other": 81,
        "total_unimproved_other": 9,
        "total_unimproved_surface": 6
    }
]
var data = [];

function loadBackend_JMR_v2(app,db) {

    // REDIRECT al portal de documentación
  app.get(API_BASE_JMR + "/docs", (req, res) => {
    res.redirect("https://documenter.getpostman.com/view/33042137/2sA35LVK84");
  });

    // GET => Lista todos los datos
    // Permite establecer un periodo con from y to
    // Permite buscar por cualquier parametro con ?parametro=valor
    // Permite paginacion con limit y offset

    app.get(API_BASE_JMR + "/", (req, res) => {
        const { from, to, limit, offset, ...queryParams } = req.query;
    
        // Función para manejar la respuesta de la base de datos y la paginación
        function handleDbResponse(err, listings, filterFunction = null) {
            if (err) {
                return res.status(500).send("Internal Server Error");
            }
    
            // Aplicar filtro adicional si es necesario
            let filteredListings = filterFunction ? listings.filter(filterFunction) : listings;
    
            if (filteredListings.length === 0) {
                return res.status(404).send("[]");
            }
    
            // Aplicar paginación si los parámetros limit y offset están presentes
            let paginatedListings = filteredListings;
            if (limit !== undefined) {
                const limitNum = parseInt(limit);
                const offsetNum = parseInt(offset || 0); // Asegurar que offset tenga un valor por defecto de 0
                paginatedListings = filteredListings.slice(offsetNum, offsetNum + limitNum);
            }
    
            // Eliminar el campo _id de los resultados y enviar la respuesta
            const responseBody = paginatedListings.map((listing) => {
                delete listing._id;
                return listing;
            });
            res.status(200).send(responseBody);
        }
    
        // Verifica si hay parámetros 'from' y 'to'
        if (from !== undefined && to !== undefined) {
            const fromYear = parseInt(from);
            const toYear = parseInt(to);
            if (isNaN(fromYear) || isNaN(toYear)) {
                return res.status(400).send("Invalid year format. Please provide valid year values.");
            }
    
            // Define un filtro basado en el rango de años
            const yearFilter = listing => {
                const listingYear = parseInt(listing.year);
                return listingYear >= fromYear && listingYear <= toYear;
            };
    
            // Filtra los resultados dentro del rango de años especificado
            db.find({}, (err, listings) => handleDbResponse(err, listings, yearFilter));
        } else if (Object.keys(queryParams).length === 0) {
            // No hay parámetros de consulta, devolver todos los recursos
            db.find({}, handleDbResponse);
        } else {
            // Convertir parámetros de consulta numéricos
            Object.keys(queryParams).forEach(key => {
                if (!isNaN(parseFloat(queryParams[key]))) {
                    queryParams[key] = parseFloat(queryParams[key]);
                }
            });
    
            // Hay parámetros de consulta, filtrar por esos parámetros
            db.find(queryParams, handleDbResponse);
        }
    });
    
        // GET => Lista todos los datos
    
    app.get(API_BASE_JMR+"/",(req,res)=>{

        if (listings.length === 0) {
            return res.status(404).send("[]");
        } else {
        res.status(200).send(JSON.stringify(data));
        }
    }),

    // GET => loadInitialData (al hacer un GET cree 10 o más datos en el array de NodeJS si está vacío)
    app.get(API_BASE_JMR+"/loadInitialData",(req,res) => {
        db.find({},(err,listings) => {
          if(err){
            res.sendStatus(500, "INTERNAL ERROR");
          }; 
          if (listings.length === 0) {
            db.insert(initialData, (err,listings) =>{
              if(err){
                console.error("Error al insertar datos iniciales:", err);
                res.sendStatus(500, "INTERNAL ERROR");
              } else {
                console.log("Database is empty.");
                console.log("Adding initial data.");
                res.sendStatus(201, "DATA CREATED");
              }
            });
          } else {
            console.log("Database already contains data, initial data won't be loaded again.");
            res.sendStatus(200, "OK");
          }
        }); 
      }),
  

    // GET => Get data by ISO_CODE

    app.get(API_BASE_JMR + "/ISO/:iso_code", (req, res) => {
        const iso = req.params.iso_code;
        db.find({ iso_code: iso }, (err, listings) => {
            if (err) {
                res.sendStatus(500, "INTERNAL ERROR");
            } else {
                if (listings.length === 0) {
                    res.sendStatus(404, "NOT FOUND");
                } else {
                    res.status(200).send(JSON.stringify(listings.map((listing => { delete listing._id; return listing; }))));
                }
            }
        });
      }),

    // GET => Get data by YEAR

    app.get(API_BASE_JMR + "/year/:year", (req, res) => {
        const año = req.params.year;
        // Verificar si el año tiene un formato válido (cuatro dígitos)
        if (!(/^\d{4}$/.test(año))) {
        return res.status(400).send("Bad Request. Please provide a valid year in YYYY format.");
        };
        const yearInt = parseInt(año);
        db.find({ year: yearInt }, (err, listings) => {
            if (err) {
                res.sendStatus(500, "INTERNAL ERROR");
            } else {
                if (listings.length === 0) {
                    res.sendStatus(404, "NOT FOUND");
                } else {
                    res.status(200).send(JSON.stringify(listings.map((listing => { delete listing._id; return listing; }))));
                }
            }
        });
      }),

      // GET => Buscar por iso_code y country
    app.get(API_BASE_JMR + "/:iso_code/:country", (req, res) => {
        const pais = req.params.country;
        const iso = req.params.iso_code;
        // Crear una expresión regular para buscar en el campo host_since
        db.find({ iso_code: iso, country: pais }, (err, listings) => {
            if (err) {
                res.sendStatus(500, "INTERNAL ERROR");
            } else {
                if (listings.length === 0) {
                    res.sendStatus(404, "RESOURCE NOT FOUND");
                } else {
                    res.status(200).send(JSON.stringify(listings.map((listing => { delete listing._id; return listing; }))));
                }
            }
        });
      }),

      // GET => Buscar por iso_code y year
    app.get(API_BASE_JMR + "/1/:iso_code/:year", (req, res) => {
        const year = parseInt(req.params.year);
        const iso = req.params.iso_code;
        // Crear una expresión regular para buscar en el campo host_since
        db.find({ iso_code: iso, year: year }, (err, listings) => {
            if (err) {
                res.sendStatus(500, "INTERNAL ERROR");
            } else {
                if (listings.length === 0) {
                    res.sendStatus(404, "RESOURCE NOT FOUND");
                } else {
                    if (listings.length === 1) {
                        const responseBody = listings[0];
                        delete responseBody._id;
                        return res.status(200).send(responseBody);
                      } else {
                        // Si hay más de un elemento, devolver el array normalmente
                        const responseBody = listings.map((listing => { delete listing._id; return listing; }));
                        return res.status(200).send(responseBody);
                      }
                }
            }
        });
      }),
      


    // POST => Crea un nuevo análisis de datos

    app.post(API_BASE_JMR + "/", (req,res) => {
        let newData = req.body;
        const expectedFields = ["iso_code","country","year","urban_improved_total","urban_improved_piped","urban_improved_other","urban_unimproved_other","rural_improved_total","rural_improved_piped","rural_improved_other","rural_unimproved_other","rural_unimproved_surface","total_improved_total","total_improved_piped","total_improved_other","total_unimproved_other","total_unimproved_surface"
    ];
    const receivedFields = Object.keys(newData);
    const isValidData = expectedFields.every(field => receivedFields.includes(field));
    if (!isValidData) {
        res.sendStatus(400, "Bad Request"); // Datos inválidos
    } else {
        // Verificar si ya existe un documento con el mismo cci en la base de datos
        db.findOne({ iso_code: newData.iso_code, country: newData.country, year: newData.year }, (err, existingData) => {
            if (err) {
                res.sendStatus(500, "Internal Error"); // Error interno del servidor
            } else {
                if (existingData) {
                    res.sendStatus(409, "Conflict"); //Datos existentes
                } else {
                    // Si no existe, insertar el nuevo documento
                    db.insert(newData, (err, insertedData) => {
                        if (err) {
                            res.sendStatus(500, "Internal Error"); // Error interno del servidor
                        } else {
                            res.sendStatus(201, "Created");
                        }
                    });
                }
            }
        });
    }
});


    // PUT => Can't update root directory
    app.put(API_BASE_JMR + "/", (req,res)=> {
        res.sendStatus(405,"METHOD NOW ALLOWED");
    }),

    //PUT => Update resource by ISO_CODE && YEAR

    app.put(API_BASE_JMR + "/:iso_code/:year", (req, res) => {
        const iso = req.params.iso_code;
        const year = parseInt(req.params.year);
        let data = req.body;
  
        if (!data || Object.keys(data).length === 0 || data.iso_code !== iso || data.year !== year) {
            res.sendStatus(400, "BAD REQUEST,please provide valid data"); // Datos inválidos
        } else {
            db.update({ iso_code: iso, year: year }, data, { }, (err) => {
                if (err) {
                    res.sendStatus(500, "Internal Server Error"); // Error interno del servidor
                }
                res.sendStatus(200, "Ok"); //Actualizacion correcta
            });
        }
    }),
    

    // DELETE => Delete all data

    app.delete(API_BASE_JMR + "/", (req, res) => {
        db.remove({}, { multi: true }, (err, numRemoved) => { // Borrar todo la base de datos
          if (err) {
              res.sendStatus(500, "Internal Error"); // Error interno del servidor
              return;
          } else {
              if (numRemoved >= 1) {
                  res.sendStatus(200, "Ok"); // Todos los datos han sido eliminados correctamente
              } else {
                  res.sendStatus(204, "Not found"); // No se encontraron datos para eliminar
              }
          }
      });
    }),

    // DELETE => Delete specific data by iso and country

    app.delete(API_BASE_JMR + "/:iso_code/:country", (req, res) => {
        const iso = req.params.iso_code;
        const pais = req.params.country;

        //const yearInt = parseInt(año);
    
        // Eliminar el documento con la iso_code y year especificadas de la base de datos
        db.remove({ iso_code: iso, country: pais }, {}, (err, numRemoved) => {
            if (err) {
                res.sendStatus(500).send("INTERNAL ERROR");
            } else if (numRemoved === 0) {
                // No se encontró ningún documento con la iso_code y year especificadas, devolver un error 404 NOT FOUND
                res.sendStatus(204, "NOT FOUND");
            } else {
                // Se eliminó correctamente el documento
                res.sendStatus(200, "OK");
            }
        });
        }),

        // DELETE => Delete specific data by iso and year

    app.delete(API_BASE_JMR + "/1/:iso_code/:year", (req, res) => {
        const iso = req.params.iso_code;
        const year = parseInt(req.params.year);
        //const yearInt = parseInt(año);
    
        // Eliminar el documento con la iso_code y year especificadas de la base de datos
        db.remove({ iso_code: iso, year: year }, {}, (err, numRemoved) => {
            if (err) {
                res.sendStatus(500).send("INTERNAL ERROR");
            } else if (numRemoved === 0) {
                // No se encontró ningún documento con la iso_code y year especificadas, devolver un error 404 NOT FOUND
                res.sendStatus(204, "NOT FOUND");
            } else {
                // Se eliminó correctamente el documento
                res.sendStatus(200, "OK");
            }
        });
        }),

        // DELETE => Delete specific data by urban_improved_total and urban_improved_piped

    app.delete(API_BASE_JMR + "/urban/:urban_improved_total/:urban_improved_piped", (req, res) => {
        const total = parseInt(req.params.urban_improved_total);
        const piped = parseInt(req.params.urban_improved_piped);
    
        // Eliminar el documento con la urban_improved_total y urban_improved_piped especificadas de la base de datos
        db.remove({ urban_improved_total: total, urban_improved_piped: piped }, {}, (err, numRemoved) => {
            if (err) {
                res.sendStatus(500).send("INTERNAL ERROR");
            } else if (numRemoved === 0) {
                // No se encontró ningún documento con la urban_improved_total y urban_improved_piped especificadas, devolver un error 404 NOT FOUND
                res.sendStatus(204, "NOT FOUND");
            } else {
                // Se eliminó correctamente el documento
                res.sendStatus(200, "OK");
            }
        });
        }),

        // DELETE => Eliminar por rango de urban_improved_other
    app.delete(API_BASE_JMR + "/urban_improved_other/:min/:max", (req, res) => {
        const minimo = parseFloat(req.params.min);
        const maximo = parseFloat(req.params.max);
  
        // Eliminar todos los documentos cuyo urban_improved_other esté dentro del rango especificado
        db.remove({ urban_improved_other: { $gte: minimo, $lte: maximo } }, { multi: true }, (err, numRemoved) => {
            if (err) {
                res.status(500).send("Internal Error");
            } else if (numRemoved === 0) {
                res.status(204).send("No content found");
            } else {
                res.status(200).send("OK, listing(s) deleted");
            }
        });
      }),

    // POST => Method not allowed
    app.post(API_BASE_JMR + "/:iso_code", (req, res) => {
        // Devuelve un estado 405 (Método no permitido) con un mensaje explicativo
        res.status(405).send("METHOD NOT ALLOWED. Please use this endpoint to create a new resource without specifying an ID or param.");
        });    
};

export {loadBackend_JMR_v2};