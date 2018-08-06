import { Quote } from "../data/quote.interface";

export class QuotesService {
    private favoriteQuotes: Quote[] = [];

    addQuoteToFavorites(quote: Quote) {
        this.favoriteQuotes.push(quote);
    // checking the service/prodiver
    console.log(this.favoriteQuotes);    
    }

    removeQuoteFromFavorites(quote: Quote) {
        const position = this.favoriteQuotes.findIndex((quoteElement: Quote) => {
            return quoteElement.id == quote.id;
        });
        this.favoriteQuotes.splice(position, 1);
    }
    // return us the erray
    getFavoriteQuotes() {
        return this.favoriteQuotes.slice(); 
    }
    //     passing a copy of the array instead of ref
    // 
}