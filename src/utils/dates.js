import moment from "moment";

export const formatDate = date => (date ? moment(date).format("MMMM YYYY") : "Present");
