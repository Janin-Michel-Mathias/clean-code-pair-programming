const getMoney = require('./index.js');

describe('tests', () => {
    it('Single item euro', () => {
        const testObject = {
            prices: [1],
            quantities: [1],
            reduction: 'STANDARD',
            country: 'FR'
        }

        expect(getMoney(testObject)).toBe('1 €');
    })

    it('Single expensive item euro', () => {
        const testObject = {
            prices: [2],
            quantities: [1],
            reduction: 'STANDARD',
            country: 'FR'
        }

        expect(getMoney(testObject)).toBe('2 €');
    })    

    it('Single item euro with quantity 2', () => {
        const testObject = {
            prices: [1],
            quantities: [2],
            reduction: 'STANDARD',
            country: 'FR'
        }

        expect(getMoney(testObject)).toBe('2 €');
    })

    it('Many item euro', () => {
        const testObject = {
            prices: [1, 2],
            quantities: [1, 2],
            reduction: 'STANDARD',
            country: 'FR'
        }

        expect(getMoney(testObject)).toBe('5 €');
    })

    it('Single item euro with reduction half', () => {
        const testObject = {
            prices: [2],
            quantities: [1],
            reduction: 'HALF',
            country: 'FR'
        }

        expect(getMoney(testObject)).toBe('1 €');
    })

    it('Single item euro with reduction tenth', () => {
        const testObject = {
            prices: [10],
            quantities: [1],
            reduction: 'TENTH',
            country: 'FR'
        }

        expect(getMoney(testObject)).toBe('9 €');
    })

    it('Single item pound', () => {
        const testObject = {
            prices: [2],
            quantities: [1],
            reduction: 'STANDARD',
            country: 'UK'
        }

        expect(getMoney(testObject)).toBe('4 £');
    })

    it('Single item dollars', () => {
        const testObject = {
            prices: [1],
            quantities: [1],
            reduction: 'STANDARD',
            country: 'US'
        }

        expect(getMoney(testObject)).toBe('3 $');
    })

    
    it('Single item euro with reduction half first', () => {
        const testObject = {
            prices: [2, 2],
            quantities: [1, 1],
            reduction: 'HALF_FIRST',
            country: 'FR'
        }

        expect(getMoney(testObject)).toBe('3 €');
    })

    it('Single item euro with reduction half first with odd items number', () => {
        const testObject = {
            prices: [2, 2, 2],
            quantities: [1, 1, 1],
            reduction: 'HALF_FIRST',
            country: 'FR'
        }

        expect(getMoney(testObject)).toBe('4 €');
    })

    it('Single item euro with reduction half last', () => {
        const testObject = {
            prices: [2, 2],
            quantities: [1, 1],
            reduction: 'HALF_LAST',
            country: 'FR'
        }

        expect(getMoney(testObject)).toBe('3 €');
    })

    it('Single item euro with reduction half last with odd items number', () => {
        const testObject = {
            prices: [2, 2, 2],
            quantities: [1, 1, 1],
            reduction: 'HALF_LAST',
            country: 'FR'
        }

        expect(getMoney(testObject)).toBe('5 €');
    })

    it('Single item euro with reduction special', () => {
        const testObject = {
            prices: [10, 10, 10, 10, 10, 10],
            quantities: [2, 3, 4, 5, 6, 7],
            reduction: 'SPECIAL',
            country: 'FR'
        }

        expect(getMoney(testObject)).toBe('165 €');
    })
})
