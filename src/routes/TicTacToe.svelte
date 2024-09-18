<script lang="ts">
    type Player = 'X' | 'O';
    type Cell = Player | null;
  
    let board: Cell[] = Array(9).fill(null);
    let currentPlayer: Player = 'X';
    let winner: Player | 'Tie' | null = null;
  
    function handleClick(index: number): void {
      if (!board[index] && !winner) {
        board[index] = currentPlayer;
        if (checkWinner()) {
          winner = currentPlayer;
        } else if (board.every((cell) => cell)) {
          winner = 'Tie';
        } else {
          currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
      }
    }

    function resetGame(): void {
      board = Array(9).fill(null);
      currentPlayer = 'X';
      winner = null;
    }

    function checkWinner(): boolean {
      const winningCombinations: number[][] = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      return winningCombinations.some((combination) => {
        const [a, b, c] = combination;
        return board[a] && board[a] === board[b] && board[a] === board[c];
      });
    }
  </script>
  
  <div class="board grid grid-cols-3 grid-rows-3 gap-4 my-4">
    {#each board as cell, index}
    <button 
    type="button" 
    class="w-24 flex justify-center items-center h-24 bg-secondary text-[0px] cursor-pointer rounded-md" 
    on:click={() => handleClick(index)} 
    disabled={cell !== null} 
    
  >
    {#if cell}{cell}{/if}
    {#if cell === 'X'}
        <svg viewBox="0 0 12 12" fill="none" class="w-16 h-16">
            <path d="M1 1L11 11" class="stroke-interaction" stroke-width="2" stroke-linecap="round"/>
            <path d="M1 11L10.7884 1" class="stroke-interaction" stroke-width="2" stroke-linecap="round"/>
        </svg>
    {/if}
    {#if cell === 'O'}
        <svg viewBox="0 0 14 14" fill="none" class="w-[72px] h-[72px]">
            <path d="M14 7C14 10.866 10.866 14 7 14C3.13401 14 0 10.866 0 7C0 3.13401 3.13401 0 7 0C10.866 0 14 3.13401 14 7ZM1.72238 7C1.72238 9.91475 4.08525 12.2776 7 12.2776C9.91475 12.2776 12.2776 9.91475 12.2776 7C12.2776 4.08525 9.91475 1.72238 7 1.72238C4.08525 1.72238 1.72238 4.08525 1.72238 7Z" class="fill-primary"/>
        </svg>
    {/if}
  </button>
  
    {/each}
  </div>
  
  
  {#if winner}
    <div class="mt-4 text-2xl">
      {winner === 'Tie' ? 'Égalité' : `Les ${winner} ont gagné !`}
    </div>
  {/if}
  {#if winner}
  <button on:click={resetGame} class="mt-4 py-3 px-6 bg-interaction text-secondary text-xl font-black cursor-pointer rounded-md">Rejouer</button>
  {/if}
  