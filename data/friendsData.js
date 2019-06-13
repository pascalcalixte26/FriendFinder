// ===============================================================================
// DATA
// Below data will hold all lists of friends.
// Initially we just set it equal to a "dummy" friend.
// But you could have it be an empty array as well.
// ===============================================================================

var friendsArray = [
    {
      name: "Halle Berry",
      photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.usmagazine.com%2Fwp-content%2Fuploads%2F2018%2F10%2Fhalle-berry-best-body.jpg&imgrefurl=https%3A%2F%2Fwww.usmagazine.com%2Fcelebrity-body%2Fnews%2Fhalle-berrys-trainer-shares-the-secrets-to-her-best-body-ever%2F&docid=nRSBLiO66wfVhM&tbnid=k5uayRE1iH2RGM%3A&vet=10ahUKEwjmqa3z2-LiAhUqh-AKHRzfDIMQMwh8KAEwAQ..i&w=1428&h=2000&bih=811&biw=1504&q=halle%20berry&ved=0ahUKEwjmqa3z2-LiAhUqh-AKHRzfDIMQMwh8KAEwAQ&iact=mrc&uact=8",
      scores: [
          5,
          4,
          5,
          3,
          2,
          4,
          5,
          1,
          4,
          3
      ]
      
    }
  ];
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = friendsArray;