export default class DateFormatter{

    dateToText(createdAt){
        let today = new Date();
        let createdDate = new Date(createdAt);
        let one_day=1000*60*60*24;
        let diffDays = (today.getTime() - createdDate.getTime())/one_day;
        if(diffDays > 365){
            return Math.floor(diffDays/365) + " years ago"
        }else if(diffDays > 30){
            return Math.floor(diffDays/30)+ " months ago";
        }
        return Math.floor(diffDays)+" days ago";
    }
}