var dayOfWeek = function (day) {
    switch (day) {
      case 1:
        console.log(`${day} - Monday`);
        break;
      case 2:
        console.log(`${day} - Tuesday`);
        break;
      case 3:
        console.log(`${day} - Wed`);
        break;
      case 4:
        console.log(`${day} - Thur`);
        break;
      case 5:
        console.log(`${day} - Friday`);
        break;
      case 6:
        console.log(`${day} - Sat`);
        break;
      case 7:
        console.log(`${day} - Sunday`);
        break;
      default:
          console.log(`${day} - In valid input`);
        break;
    }
    console.log(`------- End of switch case ---------`);
  };
  dayOfWeek(2);
  dayOfWeek(7);
  dayOfWeek(4);
  dayOfWeek(9);
  dayOfWeek(100);
  dayOfWeek(null);
  dayOfWeek(undefined);
  dayOfWeek("GK");