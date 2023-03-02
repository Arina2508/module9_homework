const parser = new DOMParser();
const xmlString= `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;
const xmlDOM = parser.parseFromString(xmlString, "text/xml");
const studentNode = xmlDOM.querySelectorAll("student");

const result = {};
const list =[]
studentNode.forEach(item => {
  const student = {};
  student['age'] = item.querySelector("age").textContent;
  student['prof'] = item.querySelector("prof").textContent;
  
  const nameNode = item.querySelector("first").textContent;
  const nameSecondNode = item.querySelector("second").textContent;
student["name"]=nameNode +" "+ nameSecondNode
student['lang']=item.querySelector("name").getAttribute("lang")
list.push(student)
})
result["list"]=list
console.log(result);