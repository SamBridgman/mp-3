import useCalculator from '../hooks/useCalculator';

export default function Calculator() {
    const { firstNumber, secondNumber, setFirstNumber, setSecondNumber, output, calculate, clearInputs } = useCalculator();

    let outputColor = 'black';
    if (typeof output === 'number' && output < 0) {
        outputColor = 'red';
    }

    return (
        <div id="calculator-container">
            <div id="calculator-inputs">
                <div className="calculator-field">
                    <label htmlFor="first-number">First Number</label>
                    <input
                        type="number"
                        step="any"
                        id="first-number"
                        value={firstNumber}
                        onChange={(event) => setFirstNumber(event.target.value)}
                    />
                </div>
                <div className="calculator-field">
                    <label htmlFor="second-number">Second Number</label>
                    <input
                        type="number"
                        step="any"
                        id="second-number"
                        value={secondNumber}
                        onChange={(event) => setSecondNumber(event.target.value)}
                    />
                </div>
            </div>

            <div id="calculator-buttons">
                <button type="button" onClick={() => calculate('+')}>+</button>
                <button type="button" onClick={() => calculate('-')}>-</button>
                <button type="button" onClick={() => calculate('*')}>*</button>
                <button type="button" onClick={() => calculate('/')}>/</button>
                <button type="button" onClick={() => calculate('**')}>**</button>
                <button type="button" onClick={clearInputs}>clear</button>
            </div>

            <h4 id="output" style={{ color: outputColor }}>{output}</h4>
        </div>
    );
}
