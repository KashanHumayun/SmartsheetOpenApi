
module.exports = async function (ctx) {
    const cells = ctx.selectors("cells")

console.log(cells);
    return {
        "active": cells[0].value,
        "risk": cells[1].value,
        "number": cells[2].value,
        "project_dashboard":{
            "link": cells[3].hyperlink.url,
            "value": cells[3].value
        },
        "phase":cells[4].value,
        "client": cells[5].value,
        "sales_rep": cells[6].value,
        "closed_at": cells[7].value,
        "short_description": cells[8].value,
        "approval": cells[9].value,
        "start_date": cells[10].value,
        "end_date": cells[11].value,
        "project_type": cells[12].value,
        "resource_allocated_cost": cells[13].value,
        "time_worked": cells[14].value,
        "remaining_duration": cells[15].value,
        "budget_cost_project_currency": {
            "link": cells[16].link,
            "value": cells[16].value
        },
        "assigned_to": cells[17].value,
        "manager": cells[18].value
    }
};
