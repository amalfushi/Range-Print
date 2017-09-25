function RangePrintRegular(startingNumber, endingNumber, skip){
    if(endingNumber < startingNumber){
        for (var i=startingNumber; i>endingNumber; i-=skip){
            console.log(i);
        }
    } else {
        for (var i=startingNumber; i<endingNumber; i+=skip){
            console.log(i);
        }
    }
}

function RangePrint(startingNumber, endingNumber, skip){
    if(endingNumber==null && skip==null){
        RangePrintRegular(0, startingNumber, 1);
    } else if(skip==null){
        RangePrintRegular(startingNumber, endingNumber, 1);
    } else{
        RangePrintRegular(startingNumber, endingNumber, skip);
    }
}

RangePrint(6);
RangePrint(-5, 10)
RangePrint(23, 97, 13);