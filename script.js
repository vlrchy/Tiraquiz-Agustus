document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    
    const crosswordContainer = document.getElementById('crossword');
    if (!crosswordContainer) {
        console.error('Crossword container not found!');
        return;
    }

    const crosswordData = [
        [{letter: ' '}, {letter: ' '}, {letter: ' '}, {letter: ' '}, { letter: ' '}, {letter: ' '}, {letter: '', number: 1 }, {letter: ' '}, {letter: ' '}, {letter: ' '}],
        [{letter: ' '}, {letter: ' '}, {letter: ' '}, {letter: ' '}, { letter: ' '}, {letter: '', number: 2}, {letter: ''}, {letter: ''}, {letter: ''}, {letter: ' '} ],
        [{letter: ' '}, {letter: '', number: 4}, {letter: ' '}, {letter: ' '}, { letter: ' '}, {letter: ' '}, {letter: ''}, {letter: ' '}, {letter: ' '}, {letter: ' '} ],
        [{letter: '', number: 3}, {letter: ''}, {letter: ''}, {letter: ''}, { letter: ''}, {letter: ''}, {letter: ''}, {letter: ''}, {letter: ''}, {letter: ' '},],
        [{letter: ' '}, {letter: ''}, {letter: ' '}, {letter: ' '}, { letter: ' '}, {letter: ' '}, {letter: ' '}, {letter: ' '}, {letter: ' '}, {letter: ' '}, ],
        [{letter: ' '}, {letter: ''}, {letter: ' '}, {letter: ' '}, { letter: ' '}, {letter: ' '}, {letter: ' '}, {letter: ' '}, {letter: ' '}, {letter: ' '}, ],
        [{letter: ' '}, {letter: '', number: 5}, {letter: ''}, {letter: ''}, { letter: ''}, {letter: ''}, {letter: ''}, {letter: ''}, {letter: ''}, {letter: ''}, ],
         ];

    
    function createCrossword(data) {
        const table = document.createElement('table');
        data.forEach((row, rowIndex) => {
            const tr = document.createElement('tr');
            row.forEach((cell, cellIndex) => {
                const td = document.createElement('td');
                if (cell.number !== null) {
                    const numberSpan = document.createElement('span');
                    numberSpan.classList.add('number');
                    numberSpan.textContent = cell.number;
                    td.appendChild(numberSpan);
                }
                const input = document.createElement('input');
            input.maxLength = 1;
            input.id = `cell-${rowIndex}-${cellIndex}`;
            input.addEventListener('input', (event) => {
                input.value = input.value.toUpperCase();
                if (input.value.length === 1) {
                    const nextCell = document.querySelector(`#cell-${rowIndex}-${cellIndex + 1}`);
                    if (nextCell) {
                        nextCell.focus();
                    }  else {
                        const nextRowCell = document.querySelector(`#cell-${rowIndex + 1}-0`);
                        if (nextRowCell) {
                            nextRowCell.focus();}
                if (input.value.length > 1) {
                    input.value = input.value.charAt(0).toUpperCase(); 
                }}
            }
        }
    );
            if (cell.letter !== '') {
                input.value = cell.letter;
                input.disabled = true;
            }
                td.appendChild(input);
                tr.appendChild(td);
            });
            table.appendChild(tr);
        });
        return table;
    }

    crosswordContainer.appendChild(createCrossword(crosswordData));
    console.log('Crossword grid created and appended to the container');
});