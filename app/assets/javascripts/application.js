// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).ready(function(){

  $("#bit-map").on("change", function(){

    var all_bits = [
                      "1 : Secondary Bit Map",
                      "2 : Primary Account Number",
                      "3 : Processing Code",
                      "4 : Transaction Amount",
                      "5 : Settlement Amount",
                      "6 : Cardholder Billing Amount",
                      "7 : Transmission Date and Time",
                      "8 : Cardholder Billing Fee Amount",
                      "9 : Settlement Conversion Rate",
                      "10 : Cardholder Billing Conversion Rate",
                      "11 : Systems Trace Audit Number",
                      "12 : Local Transaction Time",
                      "13 : Local Transaction Date",
                      "14 : Expiration Date",
                      "15 : Settlement Date",
                      "16 : Conversion Date",
                      "17 : Capture Date",
                      "18 : Merchant Type",
                      "19 : Acquiring Institution Country Code",
                      "20 : Country Code Primary Account Number Extended",
                      "21 : Forwarding Institution Country Code",
                      "22 : Point of Service Entry Mode",
                      "23 : Card Sequence Number",
                      "24 : Network International Identifier",
                      "25 : Point of Service Condition Code",
                      "26 : Point of Service PIN Capture Code",
                      "27 : Authorization Identification Response Length",
                      "28 : Transaction Fee Amount",
                      "29 : Settlement Fee Amount",
                      "30 : Transaction Processing Fee Amount",
                      "31 : Settlement Processing Fee Amount",
                      "32 : Acquiring Institution Identification Code",
                      "33 : Forwarding Institution Identification Code",
                      "34 : Extended Primary Account Number",
                      "35 : Track 2 Data",
                      "36 : Track 3 Data",
                      "37 : Retrieval Reference Number",
                      "38 : Authorization Identification Response",
                      "39 : Response Code",
                      "40 : Service Restriction Code",
                      "41 : Card Acceptor Terminal Identification",
                      "42 : Card Acceptor Identification Code",
                      "43 : Card Acceptor Name/Location",
                      "44 : Base24 Additional Response Data",
                      "45 : Track 1 Data",
                      "46 : ISO Additional Data",
                      "47 : National Additional Data",
                      "48 : Base24 Additional Data",
                      "49 : Transaction Currency Code",
                      "50 : Settlement Currency Code",
                      "51 : Cardholder Billing Currency Code",
                      "52 : Personal Identification Number (PIN) Data",
                      "53 : Security Related Control Information",
                      "54 : BASE24 Additional Amounts",
                      "55 : ISO Reserved",
                      "56 : ISO Reserved",
                      "57 : National Reserved",
                      "58 : BASE24-teller Financial Token",
                      "59 : BASE24-teller CAF Update Token",
                      "60 : BASE24 Terminal Data",
                      "61 : BASE24 Card Issuer and Authorizer Data",
                      "62 : BASE24 Postal Code",
                      "63 : BASE24-atm PIN Offset / BASE24-pos Additional Data",
                      "64 : Primary Message Authentication Code",
                      "65 : Extended Bit Map",
                      "66 : Settlement Code",
                      "67 : Extended Payment Code",
                      "68 : Receiving Institution Country Code",
                      "69 : Settlement Institution Country Code",
                      "70 : Network Management Information Code",
                      "71 : Message Number",
                      "72 : Message Number Last",
                      "73 : Action Date",
                      "74 : Number Credits",
                      "75 : Reversal Number Credits",
                      "76 : Number Debits",
                      "77 : Reversal Number Debits",
                      "78 : Number Transfer",
                      "79 : Reversal Number Transfer",
                      "80 : Number Inquiries",
                      "81 : Number Authorizations",
                      "82 : Processing Fee Amount Credits",
                      "83 : Transaction Fee Amount Credits",
                      "84 : Processing Fee Amount Debits",
                      "85 : Transaction Fee Amount Debits",
                      "86 : Amount Credits",
                      "87 : Reversal Amount Credits",
                      "88 : Amount Debits",
                      "89 : Reversal Amount Debits",
                      "90 : Original Data Elements",
                      "91 : File Update Code",
                      "92 : File Security Code",
                      "93 : Response Indicator",
                      "94 : Service Indicator",
                      "95 : Replacement Amounts",
                      "96 : Message Security Code",
                      "97 : Net Settlement Amount",
                      "98 : Payee",
                      "99 : Settlement Institution Identification Code",
                      "100 : Receiving Institution Identification Code",
                      "101 : File Name",
                      "102 : Account Identification 1",
                      "103 : Account Identification 2",
                      "104 : Transaction Description",
                      "105 : ISO Reserved",
                      "106 : ISO Reserved",
                      "107 : ISO Reserved",
                      "108 : ISO Reserved",
                      "109 : ISO Reserved",
                      "110 : ISO Reserved",
                      "111 : ISO Reserved",
                      "112 : BASE24-from host maintenance Enhanced Preauthorized Hold Information / BASE24-teller Override Token",
                      "113 : BASE24-from host maintenance Automated Hot Card Update Information",
                      "114 : BASE24-from host maintenance Application File and Table Information / BASE24-teller WHFF Inquiry Token—Part 1",
                      "115 : BASE24-teller WHFF Inquiry Token—Part 2 / BASE24-from host maintenance CAF and PBF Base User Information",
                      "116 : BASE24-teller WHFF Inquiry Token—Part 3 / BASE24-from host maintenance CAF Non–Currency Dispense",
                      "117 : BASE24-teller PBF Update Token / BASE24-from host maintenance CAF EMV",
                      "118 : BASE24-from host maintenance CAF and PBF Data / BASE24-teller SPF Update Token",
                      "119 : BASE24-from host maintenance Self-Service Banking Check Information / BASE24-teller WHFF Update Token",
                      "120 : BASE24 Key Management",
                      "121 : BASE24-pos Authorization Indicators / BASE24-from host maintenance Application File and Table Information"  ,
                      "122 : BASE24 Card Issuer Identification Code",
                      "123 : BASE24-atm Deposit Credit Amount / BASE24-pos Invoice Data /Settlement Record 1",
                      "124 : BASE24-atm Depository Type / BASE24-pos Batch and Shift Data / Settlement Record 2",
                      "125 : BASE24-atm Account Indicator/Statement Print Data / BASE24-pos Settlement Data / Settlement Record 3",
                      "126 : BASE24-atm Additional Data / BASE24-pos Preauthorization and Chargeback Data",
                      "127 : BASE24-pos User Data",
                      "128 : Secondary Message Authentication Code"
                    ];


    var num_bit = {
                    "1" : "0001",
                    "2" : "0010",
                    "3" : "0011",
                    "4" : "0100",
                    "5" : "0101",
                    "6" : "0110",
                    "7" : "0111",
                    "8" : "1000",
                    "9" : "1001",
                    "0" : "0000",
                    "A" : "1010",
                    "B" : "1011",
                    "C" : "1100",
                    "D" : "1101",
                    "E" : "1110",
                    "F" : "1111",
                    "a" : "1010",
                    "b" : "1011",
                    "c" : "1100",
                    "d" : "1101",
                    "e" : "1110",
                    "f" : "1111"
    }

    var bitmap_array = $("#bit-map").val();
    var text = "";
    var bit_data = "";
    for (i = 0; i < bitmap_array.length; i++) {
        text += num_bit[bitmap_array[i]];
    }
    for (i = 0; i < text.length; i++) {
      if (text[i] == "1" ) {
        bit_data += all_bits[i] + "<br>";
      }
    }  
    $('.panel-body').html(bit_data);
  });
});