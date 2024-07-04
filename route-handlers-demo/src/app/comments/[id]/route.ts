import { redirect } from "next/navigation";
import { comments } from "../data";

export async function GET(_request: Request, { params }: { params: { id: string } }) {
    
    if (parseInt(params.id) >comments.length){
        redirect("/comments")
    }

    const comment = comments.find((comment) => comment.id === parseInt(params.id));
    return Response.json(comment);
}

// http://localhost:3000/comments/2
// json Content
// {
//     "text":"Updated Comment"
//   }
export async function PATCH(request: Request, { params }: { params: { id: string } }) {
    const body = await request.json();
    const { text } = body;
    const index = comments.findIndex((comment) => comment.id === parseInt(params.id));
    comments[index].text = text;

    return Response.json(comments[index]);
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    const index = comments.findIndex((comment) => comment.id === parseInt(params.id));
    const deletedComment = comments[index];
    comments.splice(index, 1);

    return Response.json(deletedComment);
}
