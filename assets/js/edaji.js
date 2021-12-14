    $(document).ready(function() {









        $('[name="subscription"]').change(function() {
            const beforePriceChange = ["2500", "3500", "3000", "4500"]
            if ($(this).prop('checked')) {
                $(this).val("annually")
                $(".price").each(function(index) {

                    $(this).text((+$(this).text().replace(",", "") * 90 / 100 * 11)
                        .toLocaleString())

                    $(document.querySelectorAll(".subscription-type")[index]).text("per Year")
                })
            } else {
                $(this).val("monthly")
                $(".price").each(function(index) {

                    console.log($(this).text())
                    $(this).text((+beforePriceChange[index]).toLocaleString())
                    $(document.querySelectorAll(".subscription-type")[index]).text("per Month")
                })
            }
        })









        if (screen.width < 800) {

            $(".hero-text").addClass("w-100")
        } else {

            $(".hero-text").removeClass("w-100")
        }
        var silder = $(".owl-carousel");
        silder.owlCarousel({
            autoPlay: false,
            items: 1,
            center: false,
            nav: true,
            margin: 40,
            dots: false,
            loop: true,
            navText: ["<i class='fa fa-arrow-left' aria-hidden='true'></i>",
                "<i class='fa fa-arrow-right' aria-hidden = 'true' > </i>"
            ],
            responsive: {
                0: {
                    items: 1,
                },
                575: {
                    items: 1
                },
                768: {
                    items: 2
                },
                991: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
        });



        





    })