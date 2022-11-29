import { TwitterApi } from 'twitter-api-v2';
const {execSync} = require('child_process');
const fetch = require("node-fetch");




var api_key = 'yA0DwQOYG00VsXPwE7aTdoIyX'

var api_key_secret = '56OlSv8uoaPVjWYXoEdNqP8rcqBwae5nNrSwKz3wm9QHOeoBmr'

var access_token = '1591553353972125703-wkKdQKLfJFy681SPdDV3mGunx2zNPY'

var access_token_secret = 'vGGMuzX5juEwqXCyJZuT2ObJBHd1LyIUlxiZyVAaEuZAN'
//create
// OAuth 1.0a (User context)
const userClient = new TwitterApi({
    appKey: 'yA0DwQOYG00VsXPwE7aTdoIyX',
    appSecret: '56OlSv8uoaPVjWYXoEdNqP8rcqBwae5nNrSwKz3wm9QHOeoBmr',
    // Following access tokens are not required if you are
    // at part 1 of user-auth process (ask for a request token)
    // or if you want a app-only client (see below)
    accessToken: '1591553353972125703-wkKdQKLfJFy681SPdDV3mGunx2zNPY',
    accessSecret: 'vGGMuzX5juEwqXCyJZuT2ObJBHd1LyIUlxiZyVAaEuZAN',
});

  
//userClient.v1.tweet('Hello, this is a test.');
//userClient.v1.uploadMedia('./big-buck-bunny.mp4
var hours_to_tweet_at = ['22:6', '18:0']

var this_week_metrics = []
//print if 
var last_timestamp_checkpoint = 0

var metrics = ['Big chances', '% Conversion of big chances', '% Conversion of shots in goal', '% Conversion of shots inside the box', '% Conversion shots outside the box', 'Expected Goal Build-Up (xGBuildup)', 'Expected Goal Chain', 'Expected Goals (xG)', 'Freekicks', 'Freekicks - Goals', 'Goals', 'Goals by foot', 'Goals with head', 'Penalties', 'Penalties - Goals', 'Shots on target', '% Shots on target conversion rate', 'Assists', 'Assists inside the box', 'Assists outside the box', 'Assists via open play', 'Assists via setplay', 'Chance creation', 'Crosses', 'Dribblings', 'Expected Assists (xA)', 'Key passes', '% Successful dribbles', 'One-touch passes', '% One-touch passes completion', 'Pass Progression Value', '% Pass completion', 'Passes', 'Passes creating danger', 'Passes into final third', '% Passes into final third completion', 'Passes into the box', '% Passes into the box completion', 'Passing speed', "Aerial duels opponent's half", 'Air challenges', 'Air challenges lost', 'Air challenges won', 'Blocked shots', 'Blocked crosses', 'Blocks total', '% Challenges won', 'Errors leading to goal', 'Fouls', 'Lost balls', 'Lost balls in own half', 'Pass interceptions', "Pass interceptions opponent's half", 'Pass interceptions own half', 'Red cards', 'Safety index', 'Successful tackles', 'Tackles', "Tackles opponent's half", 'Tackles own half', 'Yellow cards', 'Good interceptions', 'Interceptions', 'Saves', 'Shots saved']
var api_metrics = ['big_chances', 'big_chances_conversion_rate', 'conversion_of_shots_on_goal', 'conversion_of_shots_inside_box', 'conversion_of_shots_outside_box', 'expected_goal_buildup', 'expected_goal_chain', 'expected_goal', 'freekicks', 'goals_freekicks', 'goals_total', 'goals_by_foot', 'goals_with_head', 'penalties', 'goals_penalties', 'shots_on_target', 'shots_on_target_conversion_rate', 'assists', 'assists_inside_the_box', 'assists_outside_the_box', 'assists_open_play', 'assists_set_play', 'chance_creation', 'crosses', 'driblings_total', 'expected_assists', 'key_passes', 'dribbles_successful', 'passes_one_touch', 'passes_one_touch_accuracy_percentage', 'pass_progression_value', 'passes_total_completition_rate', 'passes_total', 'passes_creating_danger', 'passes_into_final_third', 'passes_into_final_third_completion_rate', 'passes_into_the_box', 'passes_into_the_box_completion_rate', 'passing_speed', 'air_challenges_opponent_half', 'air_challenges', 'air_challenges_lost', 'air_challenges_won', 'blocked_shots', 'blocked_crosses', 'blocks_total', 'challenges_won_percentage', 'errors_leading_goal', 'fouls', 'lost_balls', 'lost_balls_own_half', 'pass_interceptions', 'pass_interceptions_opponents_half', 'pass_interceptions_own_half', 'red_cards', 'safety_index', 'tackles_won', 'tackles_total', 'tackles_opponent_half', 'tackles_own_half', 'yellow_cards', 'goalkeeper_interceptions_good', 'goalkeeper_interceptions', 'goalkeeper_saves', 'goalkeeper_shots_saved']

fetch("https://one-versus-one.com/new-rankings-data?model=expected_goal&page=1&age_min=14&age_max=50").then((response: { json: () => any; }) => response.json()).then((json__: { [x: string]: any; }) => {
  console.log("json__");
});