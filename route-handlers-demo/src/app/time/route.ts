export const dynamic = "force-dynamic"; //by default it is aut o; doing this
//because after bulid time doens't change cause of caching

export async function GET() {
    return Response.json({
        time:new Date().toLocaleTimeString()
    })
}