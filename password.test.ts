import { validatePassword } from './password'

test('empty value - False', () => {
    expect(validatePassword("")).toBe(false)
})
test('only Numbers - False', () => {
    expect(validatePassword("3430843277")).toBe(false)
})
test('only alphabets - False', () => {
    expect(validatePassword("dfnvoih")).toBe(false)
})
test('corect password - True', () => {
    expect(validatePassword("asdf344")).toBe(true)
})

