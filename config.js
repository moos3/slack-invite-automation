module.exports = {
  // your community or team name to display on join page.
  community: process.env.COMMUNITY_NAME || 'Maine Hams',
  // your slack team url (ex: socketio.slack.com)
  slackUrl: process.env.SLACK_URL || 'mainehams.slack.com',
  // access token of slack
  // You can generate it in https://api.slack.com/web#auth
  // You should generate the token in admin user, not owner.
  // If you generate the token in owner user, missing_scope error will be occurred.
  //
  // You can test your token via curl:
  //   curl -X POST 'https://YOUR-SLACK-TEAM.slack.com/api/users.admin.invite' \
  //   --data 'email=EMAIL&token=TOKEN&set_active=true' \
  //   --compressed
  slacktoken: process.env.SLACK_TOKEN || 'xoxp-86923716002-86902911076-87255683141-82baacddd3d0b06c83bac346d668b8ba',
  // an optional security measure - if it is set, then that token will be required to get invited.
  inviteToken: process.env.INVITE_TOKEN || null,

  locale: process.env.LOCALE || "en",
};
