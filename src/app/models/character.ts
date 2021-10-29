import { JsonObject, JsonProperty } from "json2typescript";


@JsonObject('Origin')
export class Origin {

    @JsonProperty('name', String, true)
    name: string = '';

    @JsonProperty('url', String, true)
    url: string = '';
}

@JsonObject('Location')
export class Location {

    @JsonProperty('name', String, true)
    name: string = '';

    @JsonProperty('url', String, true)
    url: string = '';
}

@JsonObject('Character')
export class Character {

    @JsonProperty('id', Number, true)
    id?: number = undefined;

    @JsonProperty('name', String, true)
    name?: number = undefined;

    @JsonProperty('status', String, true)
    status?: string = undefined;

    @JsonProperty('species', String, true)
    species?: String = undefined;

    @JsonProperty('type', String, true)
    type?: String = undefined;

    @JsonProperty('gender', String, true)
    gender?: string = undefined;

    @JsonProperty('image', String, true)
    image?: string = undefined;

    @JsonProperty('origin', Origin, true)
    origin: Origin = new Origin();

    @JsonProperty('location', Location, true)
    location: Location = new Location();

    @JsonProperty('url', String, true)
    url?: string = undefined;

    @JsonProperty('created', String, true)
    created?: string = undefined;
}

@JsonObject('Info')
export class Info {

    @JsonProperty('count', Number)
    count?: number = undefined;

    @JsonProperty('pages', Number)
    pages?: number = undefined;

    @JsonProperty('next', String, true)
    next?: string = undefined;

    @JsonProperty('prev', String, true)
    prev?: string = undefined;
}

@JsonObject('Characters')
export class Characters {

    @JsonProperty('info', Info)
    info? : Info = undefined;

    @JsonProperty('results', [Character])
    results: Character [] = [];
}


export class CharacterList {

    listCharacters: Character [] = [];
}