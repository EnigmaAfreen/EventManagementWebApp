package javaQuestionPractice;

import ch.qos.logback.core.net.SyslogOutputStream;

import java.util.*;
import java.util.List;
import java.util.function.Function;
import java.util.stream.Collectors;

public class frequencyOfOdds {
    public static void main(String args[]){
    List<Integer> intList=Arrays.asList(1,2,4,7,3,7,3,7);
    System.out.println(freqOdd(intList));
}
public static List<Integer> freqOdd(List<Integer> intList){

        Map<Integer,Long> map=intList.stream()
                .filter(n->n%2!=0)
                .collect(Collectors.groupingBy(Function.identity(),Collectors.counting()
                ));
  map.forEach((key,value)->System.out.println(key+" : "+ value));
return map.values().stream().map(Long::intValue).collect(Collectors.toList());

}

}
