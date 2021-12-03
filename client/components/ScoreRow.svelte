<script lang="ts">
    type RowType = 'category' | 'bonus' | 'total';
    export let open: boolean = false;
    export let rowType: RowType;
    export let name: string;
    export let icon: string | null = null;
    export let howTo: string = '';
    export let potential: number | null = null;
    export let score1: number | null = null;
    export let score2: number | null = null;
</script>

<tr class:category-row={rowType === 'category'} class:open>
    <td>{name} 
        {#if icon}
            <span class="die-icon">{icon}</span>
        {/if}
    </td>
    <td class:how-to={!!howTo}>{howTo}</td>
    <td 
        class:potential={typeof potential === 'number'} 
        class:zero={potential === 0}
        class="score-cell" 
    >
        {score1 ?? ''}
    </td>
    <td 
        class:potential={typeof potential === 'number'} 
        class:zero={potential === 0}
        class="score-cell" 
    >
        {score2 ?? ''}
    </td>
</tr>

<style>
    td {
        text-align: center;
        padding: 5px;
    }

    tr {
        height: 50px;
    }

    td:first-child {
        text-align: left;
        width: 150px;
        line-height: 100%;
    }

    .how-to {
        width: 100px;
        font-size: small;
        background-color: #eee;
    }

    td:nth-child(3),
    td:nth-child(4) {
        width: 100px;
    }

    tr.category-row.open {
        cursor: pointer;
    }
    td.score-cell.potential {
        color: transparent;
        user-select: none;
    }

    td.score-cell {
        line-height: 1;
    }

    td {
        border: 1px solid black;
    }

    .die-icon {
        font-size: 50px;
        transform: rotate(90deg);
        float: right;
    }


    @media (hover: hover) {
        .category-row.open:hover {
            background-color: hsl(199, 100%, 21%);
        }

        td.score-cell.potential {
            color: hsl(150, 100%, 47%);
            font-weight: bold;
            user-select: auto;
        }

        tr.category-row.open:hover {
            background-color: #ecf9ff;
        }

        .category-row.open:hover td.score-cell.potential.zero {
            color: red;
        }
    }

    @media (prefers-color-scheme: dark) {
        .how-to {
            background-color: #555;
        }

        @media (hover: hover) {
            tr.category-row.open:hover {
                background-color: hsl(199, 100%, 21%);
            }

            tr.category-row.open:hover td.score-cell.potential {
                color: hsl(150, 100%, 47%);
                font-weight: bold;
                user-select: auto;
            }
        }
    }

</style>