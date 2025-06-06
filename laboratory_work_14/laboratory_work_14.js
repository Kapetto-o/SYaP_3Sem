class Sudoku {
    constructor() {
        this.board = this.generateEmptyGameField();
        this.isGreenBackground = false;
    }

    // ИГРОВОЕ ПОЛЕ 9 НА 9
    generateEmptyGameField() {
        return Array(9).fill(null).map(() => Array(9).fill(null));
    }
    
    getRandomNumbers() {
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        for (let i = numbers.length - 1; i >= 0; i--) {
            const randomIndex = Math.floor(Math.random() * (i + 1));
            [numbers[i], numbers[randomIndex]] = [numbers[randomIndex], numbers[i]];
        }
        return numbers;
    }

    isValid(board, row, col, num) {
        for (let x = 0; x < 9; x++) {
            if (board[row][x] === num || board[x][col] === num || board[3 * Math.floor(row / 3) + Math.floor(x / 3)][3 * Math.floor(col / 3) + x % 3] === num) {
                return false;
            }
        }
        return true;
    }

    // СБРОС ПОЛЯ
    resetBoard() {
        this.board = this.generateEmptyGameField();
    }

    findEmptyCell(grid) {
        for (let row = 0; row < 9; row++) {
            for (let column = 0; column < 9; column++) {
                if (grid[row][column] === null) {
                    return { row, column };
                }
            }
        }
        return null;
    }

    // ЗАПОЛНЕНИЕ ПОЛЯ
    resolveSudoku(grid) {
        const empty = this.findEmptyCell(grid);
        if (!empty) return true;
        const numbers = this.getRandomNumbers();
        for (let i = 0; i < numbers.length; i++) {
            if (!this.isValid(grid, empty.row, empty.column, numbers[i])) continue;
            grid[empty.row][empty.column] = numbers[i];
            if (this.resolveSudoku(grid)) return true;
            grid[empty.row][empty.column] = null;
        }
        return false;
    }

    // ПРОВЕРКА НА НАРУШЕНИЕ ПРАВИЛ ИГРЫ
    checkErrors(board) {
        let isValid = true;
        document.querySelectorAll('.cell').forEach(cell => cell.classList.remove('error', 'success-background'));
    
        const markError = (row, col) => {
            isValid = false;
            document.getElementById(`cell-${row}-${col}`).classList.add('error');
        };
    
        for (let row = 0; row < 9; row++) {     // Для строк
            const rowSet = new Map();
            for (let col = 0; col < 9; col++) {
                const value = board[row][col];
                if (value !== null) {
                    if (rowSet.has(value)) {
                        markError(row, col);
                        rowSet.get(value).forEach(c => markError(row, col));
                    } else {
                        rowSet.set(value, [col]);
                    }
                }
            }
        }

        for (let col = 0; col < 9; col++) {
            const colSet = new Map();
            for (let row = 0; row < 9; row++) {
                const value = board[row][col];
                if (value !== null) {
                    if (colSet.has(value)) {
                        markError(row, col);
                        colSet.get(value).forEach(r => markError(r, col));
                    } else {
                        colSet.set(value, [row]);
                    }
                }
            }
        }
    
        for (let boxRow = 0; boxRow < 3; boxRow++) {
            for (let boxCol = 0; boxCol < 3; boxCol++) {
                const boxSet = new Map();
                for (let row = 0; row < 3; row++) {
                    for (let col = 0; col < 3; col++) {
                        const r = boxRow * 3 + row;
                        const c = boxCol * 3 + col;
                        const value = board[r][c];
                        if (value !== null) {
                            if (boxSet.has(value)) {
                                markError(r, c);
                                boxSet.get(value).forEach(([br, bc]) => markError(br, bc));
                            } else {
                                boxSet.set(value, [[r, c]]);
                            }
                        }
                    }
                }
            }
        }

        if (isValid) {
            this.toggleGreenBackground();
        }
    }    

    toggleGreenBackground() {
        const boardElement = document.getElementById('sudoku-board');
        if (this.isGreenBackground) {
            boardElement.classList.remove('success-background');
        } else {
            boardElement.classList.add('success-background');
        }
        this.isGreenBackground = !this.isGreenBackground;
    }

    // ОТОБРАЖЕНИЕ ПОЛЯ В HTML
    renderField(board) {
        const sudokuBoard = document.getElementById('sudoku-board');
        sudokuBoard.innerHTML = '';
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                const cell = document.createElement('div');
                cell.className = 'cell';
                cell.id = `cell-${row}-${col}`;
                cell.contentEditable = board[row][col] === null;
                cell.textContent = board[row][col] !== null ? board[row][col] : '';
                cell.addEventListener('input', () => {
                    const value = parseInt(cell.textContent, 10);
                    if (isNaN(value) || value < 1 || value > 9) {
                        cell.textContent = '';
                        this.board[row][col] = null;
                    } else {
                        this.board[row][col] = value;
                    }
                });
                sudokuBoard.appendChild(cell);
            }
        }
    }

    // СОЗДАНИЕ НОВОГО ПОЛЯ
    generateNewGameField(partiallyFilled = true) {
        this.resetBoard();
        this.resolveSudoku(this.board);
        if (partiallyFilled) {
            for (let i = 0; i < 40; i++) { 
                const row = Math.floor(Math.random() * 9);
                const col = Math.floor(Math.random() * 9);
                this.board[row][col] = null;
            }
        }
        this.renderField(this.board);
    }

    // ОТОБРАЖЕНИЕ ВЕРНО ЗАПОЛНЕННОГО ПОЛЯ
    generateSolution() {
        this.resetBoard();
        this.resolveSudoku(this.board);
        this.renderField(this.board);
    }

    validateField() {
        this.checkErrors(this.board);
    }
}

const sudoku = new Sudoku();
document.getElementById("generateEmptyGameField").addEventListener('click', () => {
    sudoku.generateNewGameField(true);
});
document.getElementById("checkedvalidateField").addEventListener('click', () => {
    sudoku.validateField();
});
document.getElementById("generateSolution").addEventListener('click', () => {
    sudoku.generateSolution();
});
sudoku.renderField(sudoku.board);