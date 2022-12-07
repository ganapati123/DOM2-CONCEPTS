var birhdayWishes = [
    {
        title:`Wish you a many many happy returns of the day. May God bless you with health, wealth and prosperity in your life. HAPPY BIRTHDAY`
    },
    {
        title:`On your birthday I wish you success and endless happiness!.Wishing you an awesome birthday!`
    },
    {
        title:`Happy birthday to my closest and oldest friend! I feel blessed, because our friendship is a true gift of life.`

    },
    {
        title:`Wish you a beautiful birthday and I hope you get double of everything you want in your life. Happy Birthday!`

    },
    {
        title:`Today is not just your special day, it is even mine. Because today was the day when my best friend came into this world. If it were not for today, my life wouldn't have been half the fun it is. I owe so much to you. I love you buddy. Happy Birthday.`

    },
    {
        title:`On your birthday may all that you asked from God be granted to you hundred fold! Happy Birthday to my sweetest friend. Always keep smiling the way you do! Have an amazing day and an even more special year ahead. May God Bless you.`

    },
    {
        title:`Wish a fabulous birthday to my cutest baby`

    }


]
function myfun(request)
        {
            var textarea_dom = document.getElementById('input_src')

            textarea_dom.value = request
            
            var output_dom = document.getElementById('output_src')

            output_dom.innerHTML = 250 - textarea_dom.value.length 

        }