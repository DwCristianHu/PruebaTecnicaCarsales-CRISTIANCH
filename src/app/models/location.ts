import { JsonObject, JsonProperty } from "json2typescript";



@JsonObject('Location')
export class Character {

    @JsonProperty('id', Number, true)
    id?: number = undefined;

    @JsonProperty('name', String, true)
    name?: number = undefined;

    @JsonProperty('type', String, true)
    type?: string = undefined;

    @JsonProperty('dimension', String, true)
    dimension?: String = undefined;

    @JsonProperty('residents', [String], true)
    residents?:  [] = [];

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

@JsonObject('Locations')
export class Locations {

    @JsonProperty('info', Info)
    info? : Info = undefined;

    @JsonProperty('results', [Location])
    results: Location [] = [];
}