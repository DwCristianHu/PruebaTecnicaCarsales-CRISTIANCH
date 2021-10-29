import { JsonObject, JsonProperty } from "json2typescript";



@JsonObject('Episode')
export class Episode {

    @JsonProperty('id', Number, true)
    id: number = 0;

    @JsonProperty('name', String, true)
    name: number = 0;

    @JsonProperty('air_date', String, true)
    airDate: string = '';

    @JsonProperty('episode', String, true)
    code: string = '';

    @JsonProperty('characters', [String], true)
    characters: string [] = [];

    @JsonProperty('url', String, true)
    url: string = '';

    @JsonProperty('created', String, true)
    created: string = '';

}

@JsonObject('Info')
export class Info {

    @JsonProperty('count', Number)
    count: number = 0;

    @JsonProperty('pages', Number)
    pages: number = 0;

    @JsonProperty('next', String, true)
    next: string = '';

    @JsonProperty('prev', String, true)
    prev: string = '';
}

@JsonObject('Episodes')
export class Episodes {

    @JsonProperty('info', Info)
    info : Info = new Info();

    @JsonProperty('results', [Episode])
    results: Episode [] = [];
}