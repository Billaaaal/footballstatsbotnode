const {execSync} = require('child_process');




//create
// OAuth 1.0a (User context)

  
//userClient.v1.tweet('Hello, this is a test.');
//userClient.v1.uploadMedia('./big-buck-bunny.mp4

//console.log(`${hour}:${min}`);


//var hours_to_tweet_at = [`${hour_}:${min_}`, '18:0']


var i = 0;

var this_week_metrics = [];
//print if 
var last_timestamp_checkpoint = 0

var metrics = ['Big chances', '% Conversion of big chances', '% Conversion of shots in goal', '% Conversion of shots inside the box', '% Conversion shots outside the box', 'Expected Goal Build-Up (xGBuildup)', 'Expected Goal Chain', 'Expected Goals (xG)', 'Freekicks', 'Freekicks - Goals', 'Goals', 'Goals by foot', 'Goals with head', 'Penalties', 'Penalties - Goals', 'Shots on target', '% Shots on target conversion rate', 'Assists', 'Assists inside the box', 'Assists outside the box', 'Assists via open play', 'Assists via setplay', 'Chance creation', 'Crosses', 'Dribblings', 'Expected Assists (xA)', 'Key passes', '% Successful dribbles', 'One-touch passes', '% One-touch passes completion', 'Pass Progression Value', '% Pass completion', 'Passes', 'Passes creating danger', 'Passes into final third', '% Passes into final third completion', 'Passes into the box', '% Passes into the box completion', 'Passing speed', "Aerial duels opponent's half", 'Air challenges', 'Air challenges lost', 'Air challenges won', 'Blocked shots', 'Blocked crosses', 'Blocks total', '% Challenges won', 'Errors leading to goal', 'Fouls', 'Lost balls', 'Lost balls in own half', 'Pass interceptions', "Pass interceptions opponent's half", 'Pass interceptions own half', 'Red cards', 'Safety index', 'Successful tackles', 'Tackles', "Tackles opponent's half", 'Tackles own half', 'Yellow cards', 'Good interceptions', 'Interceptions', 'Saves', 'Shots saved']
//var api_metrics = ['big_chances', 'big_chances_conversion_rate', 'conversion_of_shots_on_goal', 'conversion_of_shots_inside_box', 'conversion_of_shots_outside_box', 'expected_goal_buildup', 'expected_goal_chain', 'expected_goal', 'freekicks', 'goals_freekicks', 'goals_total', 'goals_by_foot', 'goals_with_head', 'penalties', 'goals_penalties', 'shots_on_target', 'shots_on_target_conversion_rate', 'assists', 'assists_inside_the_box', 'assists_outside_the_box', 'assists_open_play', 'assists_set_play', 'chance_creation', 'crosses', 'driblings_total', 'expected_assists', 'key_passes', 'dribbles_successful', 'passes_one_touch', 'passes_one_touch_accuracy_percentage', 'pass_progression_value', 'passes_total_completition_rate', 'passes_total', 'passes_creating_danger', 'passes_into_final_third', 'passes_into_final_third_completion_rate', 'passes_into_the_box', 'passes_into_the_box_completion_rate', 'passing_speed', 'air_challenges_opponent_half', 'air_challenges', 'air_challenges_lost', 'air_challenges_won', 'blocked_shots', 'blocked_crosses', 'blocks_total', 'challenges_won_percentage', 'errors_leading_goal', 'fouls', 'lost_balls', 'lost_balls_own_half', 'pass_interceptions', 'pass_interceptions_opponents_half', 'pass_interceptions_own_half', 'red_cards', 'safety_index', 'tackles_won', 'tackles_total', 'tackles_opponent_half', 'tackles_own_half', 'yellow_cards', 'goalkeeper_interceptions_good', 'goalkeeper_interceptions', 'goalkeeper_saves', 'goalkeeper_shots_saved']
var api_metrics = ['big_chances', 'big_chances_conversion_rate']
//var auth = tweepy.OAuth1UserHandler(api_key,api_key_secret,access_token, access_token_secret)

//var api = tweepy.API(auth)
//while true breaks the fetch code
console.log("starting")

var run_loop = true

function main() {
  execSync(`sleep ${5}`);

  console.log(this_week_metrics)

                                                            
  //var i = Math.floor(Math.random() * 66)
  i = Math.floor(Math.random() * 1)
  console.log("Generated number: " + i)
  
  if (this_week_metrics.includes(i)) {
    console.log("Already tweeted this metric")
    main();
    
  } else {
    
    console.log("Adding metric to list")
    this_week_metrics.push(i)
    
      

    
  }

    
    
    
    

    

  
  main();

}

    
      


main();
