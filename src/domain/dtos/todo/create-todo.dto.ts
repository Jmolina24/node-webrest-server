


export class CreateTodoDto {


    constructor(
        public readonly text: string,
    ) { }


    static create(props: { [key: string]: any }): [string?, CreateTodoDto?] {
        const { text } = props;
        if ( !text ) return ['Text Property is Requerid', undefined];
        return [undefined, new CreateTodoDto(text)];
    }


}