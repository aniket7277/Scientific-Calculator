var screen = document.querySelector('#screen');
        var btn = document.querySelectorAll('.btn');

        /*============ For getting the value of btn, Here we use for loop ============*/
        for (item of btn) {
            item.addEventListener('click', (e) => {
                btntext = e.target.innerText;

                if (btntext == '×') {
                    btntext = '*';
                }

                if (btntext == '÷') {
                    btntext = '/';
                }
                screen.value += btntext;
            });
        }
        function Palindrom() {
            var rem, temp, final = 0;
            var number = Number(document.getElementById("screen").value);
            console.log(number);

            temp = number;
            while (number > 0) {
                rem = number % 10;
                number = parseInt(number / 10);
                final = final * 10 + rem;
            }
            if (final == temp) {
                document.getElementById("screen").value = "Palindrome";
            }
            else {
                document.getElementById("screen").value = "Not Palindrome";
            }
        }
        function Armstrong() {
            var flag, number, remainder, addition = 0;
            number = Number(document.getElementById("screen").value);

            flag = number;
            while (number > 0) {
                remainder = number % 10;
                addition = addition + remainder * remainder * remainder;
                number = parseInt(number / 10);
            }



            if (addition == flag) {
                document.getElementById("screen").value = "Armstrong";
            }

            else {
                document.getElementById("screen").value = "Not Armstrong";
            }

        }
        



        function sin() {
            screen.value = Math.sin(screen.value);
        }

        function cos() {
            screen.value = Math.cos(screen.value);
        }

        function tan() {
            screen.value = Math.tan(screen.value);
        }

        function pow() {
            screen.value = Math.pow(screen.value, 2);
        }

        function sqrt() {
            screen.value = Math.sqrt(screen.value, 2);
        }

        function log() {
            screen.value = Math.log(screen.value);
        }

        function pi() {
            screen.value = 3.14159265359;
        }

        function e() {
            screen.value = 2.71828182846;
        }

        function fact() {
            var i, num, f;
            f = 1
            num = screen.value;
            for (i = 1; i <= num; i++) {
                f = f * i;
            }

            i = i - 1;

            screen.value = f;
        }

        function backspc() {
            screen.value = screen.value.substr(0, screen.value.length - 1);
        }