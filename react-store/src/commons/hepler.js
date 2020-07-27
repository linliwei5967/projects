//  格式化价格 -> cents分  -> ¥ 596.00
export const formatPrice = (cents) => {
    return (cents / 100).toLocaleString('zh',{
        style: 'currency',
        currency: 'CNY'
    })
}