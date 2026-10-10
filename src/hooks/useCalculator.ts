import { useState } from 'react';

export default function useCalculator() {
    const [firstNumber, setFirstNumber] = useState('');
    const [secondNumber, setSecondNumber] = useState('');
    const [output, setOutput] = useState<number | string>('');

    function calculate(operation: string) {
        if (firstNumber === '' || secondNumber === '') {
            setOutput('Enter both numbers.');
            return;
        }

        const first = Number(firstNumber);
        const second = Number(secondNumber);
        let result = 0;

        if (operation === '+') {
            result = first + second;
        } else if (operation === '-') {
            result = first - second;
        } else if (operation === '*') {
            result = first * second;
        } else if (operation === '/') {
            if (second === 0) {
                setOutput('Cannot divide by zero.');
                return;
            }
            result = first / second;
        } else if (operation === '**') {
            if (!Number.isInteger(second)) {
                setOutput('The exponent must be a whole number.');
                return;
            }

            result = 1;
            for (let i = 1; i <= Math.abs(second); i++) {
                if (second < 0) {
                    result = result * (1 / first);
                } else {
                    result = result * first;
                }
            }
        }
        setOutput(result);
    }

    function clearInputs() {
        setFirstNumber('');
        setSecondNumber('');
        setOutput('');
    }

    return { firstNumber, secondNumber, setFirstNumber, setSecondNumber, output, calculate, clearInputs };
}
