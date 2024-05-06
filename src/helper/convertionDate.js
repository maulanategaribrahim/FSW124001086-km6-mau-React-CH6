export function dateConvert(time) {
  var date = new Date(time);
  var dd = String(date.getDate()).padStart(2, "0");
  var mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = date.getFullYear();
  const tgl = `${yyyy}-${mm}-${dd}`;

  const hrs = date.getUTCHours();
  const mnt = date.getUTCMinutes();
  const wkt = hrs + ":" + mnt;

  return { convertDate: tgl, convertTime: wkt };
}
