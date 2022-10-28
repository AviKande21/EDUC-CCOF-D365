//the below function working only onLoad of the form
function onLoafdOfRfiParentFeeIncrease()
{
  var formType = Xrm.Page.ui.getFormType();
  
 }
function parentFeesIncrease()
{
 var feesValue = Xrm.Page.getAttribute("ccof_haveyouincreasedparentfeesbefore").getValue();
 console.log("s" + feesValue);
 if(feesValue == 0)
 {
  Xrm.Page.ui.tabs.get("general_tab").sections.get("feeHistoryDetails").setVisible(false);
 }
 else
 {
 Xrm.Page.ui.tabs.get("general_tab").sections.get("feeHistoryDetails").setVisible(true);
 } 
}

function expenseCircumastances()
{
 var excepVal = Xrm.Page.getAttribute("ccof_doestheexceptionalcircumstanceoccurwithin").getValue();
 if(excepVal == 0)
 {
  Xrm.Page.ui.tabs.get("general_tab").sections.get("expenseInfo").setVisible(false);
 }
 else
 {
 Xrm.Page.ui.tabs.get("general_tab").sections.get("expenseInfo").setVisible(true);
 } 
}

