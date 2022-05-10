export type ListItem = {
    id: number,
    imageUrl: string,
    name: string,
    count: number,
    size: Size
    weight: string,
    comments: Comment[]
}

export type Size = {
    width: number,
    height: number
}

export type Comment = {
    id: number,
    productId: number,
    description: string,
    date: string
}
