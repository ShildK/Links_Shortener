export const getData = async (link) => {
    const req = await fetch(`https://clck.ru/--?url=${link}`)
    const res = await req.text()
    return res
}
