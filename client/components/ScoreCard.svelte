<script lang="ts">
    import ScoreRow from "./ScoreRow.svelte";
</script>

<div class="container">
    <div id="score-card-container" class="container">
        <table class="score-card">
            <tr class="header-row">
                <th>Upper Section</th>
                <th>How to Score</th>
                <th id="player-0-name"></th>
                <th id="player-1-name"></th>
            </tr>
            <ScoreRow 
                rowType="category"
                name="Aces" 
                icon="⚀"
                howTo="Count and add only Aces" 
            />
            <ScoreRow 
                rowType="category"
                name="Twos" 
                icon="⚁"
                howTo="Count and add only Twos" 
            />
            <ScoreRow 
                rowType="category"
                name="Threes" 
                icon="⚂"
                howTo="Count and add only Threes" 
            />
            <ScoreRow 
                rowType="category"
                name="Fours" 
                icon="⚃"
                howTo="Count and add only Fours" 
            />
            <ScoreRow 
                rowType="category"
                name="Fives" 
                icon="⚄"
                howTo="Count and add only Fives" 
            />
            <ScoreRow 
                rowType="category"
                name="Sixes" 
                icon="⚅"
                howTo="Count and add only Sixes" 
            />
            <ScoreRow 
                rowType="bonus"
                name="Bonus"
                howTo="Score 35 if upper total is 63 or over" 
            />
            <ScoreRow 
                rowType="total"
                name="Upper Total" 
            />
        </table>
        <table class="score-card">
            <tr class="header-row">
                <th colspan="4">Lower Section</th>
            </tr>
            <ScoreRow 
                rowType="category"
                name="3 of a Kind" 
                howTo="Add total of all dice" 
            />
            <ScoreRow 
                rowType="category"
                name="4 of a Kind" 
                howTo="Add total of all dice" 
            />
            <ScoreRow 
                rowType="category"
                name="Full House" 
                howTo="Score 25" 
            />
            <ScoreRow 
                rowType="category"
                name="Small Straight" 
                howTo="Score 30 if sequence of 4" 
            />
            <ScoreRow 
                rowType="category"
                name="Large Straight" 
                howTo="Score 40 if sequence of 5" 
            />
            <ScoreRow 
                rowType="category"
                name="Yahtzee" 
                howTo="Score 50 if 5 of a kind" 
            />
            <ScoreRow 
                rowType="category"
                name="Chance" 
                howTo="Score total of all dice" 
            />
            <ScoreRow 
                rowType="bonus"
                name="Yahtzee Bonus" 
                howTo="Score 100 for each bonus" 
            />
            <ScoreRow 
                rowType="total"
                name="Lower Total" 
            />
            <ScoreRow 
                rowType="total"
                name="Upper Total" 
            />
            <ScoreRow 
                rowType="total"
                name="Total" 
            />
        </table>
        <div class="score-card-links">
            <a href="#" id="back-to-menu">Back to main menu</a>
        </div>
    </div>
</div>

<style>
    @media (max-width: 1000px) {
        #score-card-container {
        padding-bottom: 290px;
        }
    }
    th {
        border: 1px solid black;
    }

    table.score-card {
        border-collapse: collapse;
        box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.3);
        margin-bottom: 20px;
    }

    th {
        text-align: center;
        padding: 5px;
    }

    tr {
        height: 50px;
    }

    .score-card-links {
        text-align: center;
    }
    
    th:first-child {
        text-align: left;
        width: 150px;
        line-height: 100%;
    }
    @media (prefers-color-scheme: dark) {
        .score-card {
            background-color: #383838;
        }
    }
</style>