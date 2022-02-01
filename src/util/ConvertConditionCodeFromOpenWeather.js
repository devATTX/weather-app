const ConvertConditionCodeFromOpenWeather = (weatherId) => {
  switch (weatherId) {
    /* 2XX Thunderstorm */
    case 200:
    case 201:
    case 202:
    case 210:
    case 211:
    case 212:
    case 221:
    case 230:
    case 231:
    case 232:
      return 200
    /* 3XX Drizzle */
    case 300:
    case 301:
    case 302:
    case 310:
    case 311:
    case 312:
    case 313:
    case 314:
    case 321:
      return 500
    /* 5XX Rain */
    case 500:
      return 500
    case 501:
      return 501
    case 502:
    case 503:
    case 504:
      return 502
    case 511:
      return 600
    case 520:
      return 500
    case 521:
      return 501
    case 522:
    case 531:
      return 502
    /* 6XX Snow */
    case 600:
    case 601:
    case 602:
    case 611:
    case 612:
    case 613:
    case 615:
    case 616:
    case 620:
    case 621:
    case 622:
      return 600
    /* 7XX Thunderstorm */
    case 701:
    case 711:
    case 721:
      return 741
    case 731:
      return 751
    case 741:
      return 741
    case 751:
    case 761:
    case 762:
      return 751
    case 771:
    case 781:
      return 781
    /* 800 Clear */
    case 800:
      return 800
    /* 80X Clouds */
    case 801:
    case 802:
    case 803:
    case 804:
      return 803
    default:
      return 751
  }
}

export default ConvertConditionCodeFromOpenWeather;
