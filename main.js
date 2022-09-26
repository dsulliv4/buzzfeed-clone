const questionDisplay = document.querySelector('#questions')
const answerDisplay = document.querySelector('#answer')


const questions = [
    {
        id: 0,
        text: "Pick a vacation destination:",
        answers: [
            {
                text: "New York",
                image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4470&q=80",
                alt: "Photo of the Empire State Building during daytime",
                credit: "Oliver Nebitt"
            },
            {
                text: "Austin",
                image: "https://images.unsplash.com/photo-1521223619409-8085d2607891?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2148&q=80",
                alt: "People swimming and playing in Lake Austin",
                credit: "Carlos Alfonso"
            },
            {
                text: "Portland",
                image: "https://images.unsplash.com/photo-1603312504738-3dd0fdaff23b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2371&q=80",
                alt:"high rise buildings",
                credit:"Elena Kuchko"
            },
            {
                text: "New Orleans",
                image: "https://images.unsplash.com/photo-1549965738-e1aaf1168943?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2148&q=80",
                alt: "road with colorful apartments",
                credit: "João Francisco"
            }
        ]
    },
   {
        id: 1,
        text: "Pick some food:",
        answers: [
            
        ]
    },

]
