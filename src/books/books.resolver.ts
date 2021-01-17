import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class BooksResolver {
    @Query(()=> String)
    hello(){
        return "Hello World"
    }

}
