
<script lang="ts">
    // TODO - clean this up... just did this to make the warnings go away
    let className: string = '';
    let otherClassName: string = '';

    export let icon: string = '';
    export let howTo: string = '';
    export let score1: string = '';
    export let score2: string = '';
</script>

<tr data-category="1" class="{className} category-row">
    <td>Aces <span class="die-icon">⚀</span></td>
    <td class="how-to">Count and add only Aces</td>
    <td class="{otherClassName} score-cell" data-player="0">0</td>
    <td class="score-cell" data-player="1">0</td>
</tr>

<style>
    td {
        text-align: center;
        padding: 5px;
    }

    tr {
        height: 50px;
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
}
</style>