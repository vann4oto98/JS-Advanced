function pressHouse() {   //todo: continue
    class Article{
        constructor(title, content){
            this.title = title;
            this.content = content;
        }
    
        toString() {
            return `Title: ${this.title}\nContent: ${this.content}`
        }
    }
    
    class ShortReports extends Article{
        constructor(title, content, originalResearches, comments){
            super(title, content);
            this.originalResearches = originalResearches;
            this.comments = comments;
        }

        set content(content){
            if (content.length >= 150) {
                throw new Error("Short reports content should be less then 150 symbols.");
            }
        }

        set originalResearches(originalResearches){
            if (this.originalResearches["title"] === undefined || this.originalResearches["author"] === undefined) {
                throw new Error ("The original research should have author and title.")
            }
        }

        addComment(comment){
            this.comments.push(comment);
            return "The comment is added."
        }

        toString(){
            let output = super.toString() + `\nOriginal Research: ${this.title} by ${this.author}`;
            if (this.comments.length >0){
                output += `\nComments:`
                this.comments.forEach(element => {
                    output += `\n${element}`;
                });
            } 
            return output;
        }
    }



    class BookReview extends Article{
        constructor(title, content, book, clients){
            super(title, content);
            this.book = book;
            this.clients = clients;
            this.orders = [];
        }

        addClient(clientName, orderDescription){
            this.clients.forEach(client =>{
                if (client.clientName === clientName){
                    if (client.orderDescription === orderDescription){
                        throw new Error("This client has already ordered this review.");
                    }
                }
            });
            this.orders.push({clientName, orderDescription});
            return `${clientName} has ordered a review for ${orderDescription}`;
        }

        toString(){
            let output = super.toString();
            output += `\nBook: ${this.book.name}`;
            if (this.orders.length >0){
                output += `\nOrders:`;
                this.orders.forEach(order =>{
                    output += `\n${order.clientName} - ${order.orderDescription}.`
                });
            }
            return output;
        }
    }

    return {
        Article, 
        ShortReports,
        BookReview
    };
}

let classes = pressHouse();
let lorem = new classes.Article("Lorem", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non tortor finibus, facilisis mauris vel…");
console.log(lorem.toString()); 
//------------------------------
let short = new classes.ShortReports("SpaceX and Javascript", "Yes, its damn true.SpaceX in its recent launch Dragon 2 Flight has used a technology based on Chromium and Javascript. What are your views on this ?", { title: "Dragon 2", author: "wikipedia.org" });
console.log(short.addComment("Thank god they didn't use java."))
short.addComment("In the end JavaScript's features are executed in C++ — the underlying language.");
console.log(short.toString()); 
//------------------------------
let book = new classes.BookReview("The Great Gatsby is so much more than a love story", "The Great Gatsby is in many ways similar to Romeo and Juliet, yet I believe that it is so much more than just a love story. It is also a reflection on the hollowness of a life of leisure. ...", { name: "The Great Gatsby", author: "F Scott Fitzgerald" });
console.log(book.addClient("The Guardian", "100 symbols"));
console.log(book.addClient("Goodreads", "30 symbols"));
console.log(book.toString()); 




   