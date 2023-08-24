export const fetchShortLink = async (link) => {
    const req = await fetch(`https://clck.ru/--?url=${link}`)
    return (await req.text())
}
