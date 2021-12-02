<div class="container">
    <div id="score-card-container" class="container">
        <table class="score-card">
            <tr class="header-row">
                <th>Upper Section</th>
                <th>How to Score</th>
                <th id="player-0-name"></th>
                <th id="player-1-name"></th>
            </tr>
        </table>
        <table class="score-card">
            <tr class="header-row">
                <th colspan="4">Lower Section</th>
            </tr>
        </table>
        <div class="score-card-links">
            <a id="back-to-menu">Back to main menu</a>
        </div>
    </div>
</div>

<style>
  @media (max-width: 1000px) {
    #score-card-container {
      padding-bottom: 290px;
    }
  }

  table.score-card {
    border-collapse: collapse;
    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.3);
    margin-bottom: 20px;
  }

  table.score-card th {
    text-align: center;
    padding: 5px;
  }

  tr {
    height: 50px;
  }

  .score-card-links {
    text-align: center;
  }
</style>