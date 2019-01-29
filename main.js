    $(document).ready(initializeApp)

    function initializeApp(){
        $("#searchButton").click(function(){
            console.log ("search button was clicked ");
        })

        new Search();


    }