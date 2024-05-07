


export class UpdateTodoDto {


    constructor(
        public readonly id: number,
        public readonly text?: string,
        public readonly completedAt?: Date,
        public readonly updateAt?: Date,
        
    ) { }


    get values() {
        const returnObj: { [key: string]: any } = {};
        if (this.text) returnObj.text = this.text;
        if (this.completedAt) returnObj.completedAt = this.completedAt;
        if (this.updateAt) returnObj.updateAt = this.updateAt;
        return returnObj;

    }

    static create(props: { [key: string]: any }): [string?, UpdateTodoDto?] {

        const { id, text, completedAt } = props;
        let newCompletedAt = completedAt;
        let updateAt = new Date()


        if (!id || isNaN(Number(id))) {
            return ['id must be a valid number'];
        }


        if (completedAt) {
            newCompletedAt = new Date(completedAt)
            if (newCompletedAt.toString() === 'Invalid Date') {
                return ['CompletedAt must be a valid date']
            }
        }

        return [undefined, new UpdateTodoDto(id, text, newCompletedAt, updateAt)];

    }





}