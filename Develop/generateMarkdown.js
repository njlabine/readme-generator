// Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (link) => {
  return link;
};

// Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (answer) => {
  let licenseStr = "";

  licenseStr += "MIT License";
  licenseStr += "";
  licenseStr += `Copyright (c) ${answer.licenseYear} ${answer.licenseName}`;
  return licenseStr;
  // Permission is hereby granted, free of charge, to any person obtaining a copy
  // of this software and associated documentation files (the "Software"), to deal
  // in the Software without restriction, including without limitation the rights
  // to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  // copies of the Software, and to permit persons to whom the Software is
  // furnished to do so, subject to the following conditions:

  // The above copyright notice and this permission notice shall be included in all
  // copies or substantial portions of the Software.

  // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  // IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  // FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  // AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  // LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  // OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  // SOFTWARE.
};

// Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `
	#Github 
	${data.github}
	
	##License
	${data.hasLicense ? renderLicenseLink(data.licenseLink) : null}
	${data.hasLicense ? renderLicenseSection(data) : null}
	
  ##Project Discription
  ${data.describeProject}
  

  ##Name of Project
  ${data.namedProject}
  `;
}

module.exports = generateMarkdown;
