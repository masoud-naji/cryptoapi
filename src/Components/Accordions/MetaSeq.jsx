import "./liststyle.css";
const MetaSeq = ({ setClickToken }) => {
  return (
    <div class="y8wXX">
      <ul class="ullist">
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">Any single character</div>
            <div class="IVPLo i8N8D" onClick={()=> setClickToken(".")}>
.
</div>
          </div>
        </li>
        <hr />
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">Alternate - match either a or b</div>
            <div class="IVPLo i8N8D" onClick={()=> setClickToken("a|b")}>
a|b
</div>
          </div>
        </li>
        <hr />
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">Any whitespace character</div>
            <div class="IVPLo i8N8D" onClick={()=> setClickToken("\\s")}>
\s
</div>
          </div>
        </li>
        <hr />
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">Any non-whitespace character</div>
            <div class="IVPLo i8N8D" onClick={()=> setClickToken("\\S")}>
\S
</div>
          </div>
        </li>
        <hr />
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">Any digit</div>
            <div class="IVPLo i8N8D" onClick={()=> setClickToken("\\d")}>
\d
</div>
          </div>
        </li>
        <hr />
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">Any non-digit</div>
            <div class="IVPLo i8N8D" onClick={()=> setClickToken("\\D")}>
\D
</div>
          </div>
        </li>
        <hr />
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">Any word character</div>
            <div class="IVPLo i8N8D" onClick={()=> setClickToken("\\w")}>
\w
</div>
          </div>
        </li>
        <hr />
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">Any non-word character</div>
            <div class="IVPLo i8N8D" onClick={()=> setClickToken("\\W")}>
\W
</div>
          </div>
        </li>
        <hr />
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">Any Unicode sequences, linebreaks included</div>
            <div class="IVPLo i8N8D" onClick={()=> setClickToken("\\X")}>
\X
</div>
          </div>
        </li>
        <hr />
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">Match one data unit</div>
            <div class="IVPLo i8N8D" onClick={()=> setClickToken("\\C")}>
\C
</div>
          </div>
        </li>
        <hr />
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">Unicode newlines</div>
            <div class="IVPLo i8N8D" onClick={()=> setClickToken("\\R")}>
\R
</div>
          </div>
        </li>
        <hr />
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">Match anything but a newline</div>
            <div class="IVPLo i8N8D" onClick={()=> setClickToken("\\N")}>
\N
</div>
          </div>
        </li>
        <hr />
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">Vertical whitespace character</div>
            <div class="IVPLo i8N8D" onClick={()=> setClickToken("\\v")}>
\v
</div>
          </div>
        </li>
        <hr />
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">Negation of \v</div>
            <div class="IVPLo i8N8D" onClick={()=> setClickToken("\\V")}>
\V
</div>
          </div>
        </li>
        <hr />
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">Horizontal whitespace character</div>
            <div class="IVPLo i8N8D" onClick={()=> setClickToken("\\h")}>
\h
</div>
          </div>
        </li>
        <hr />
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">Negation of \h</div>
            <div class="IVPLo i8N8D" onClick={()=> setClickToken("\\H")}>
\H
</div>
          </div>
        </li>
        <hr />
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">Reset match</div>
            <div class="IVPLo i8N8D" onClick={()=> setClickToken("\\K")}>
\K
</div>
          </div>
        </li>
        <hr />
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">Match subpattern number #</div>
            <div class="IVPLo i8N8D" onClick={()=> setClickToken("\\#")}>
\#
</div>
          </div>
        </li>
        <hr />
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">Unicode property X</div>
            <div class="IVPLo i8N8D" onClick={()=> setClickToken("\\pX")}>
\pX
</div>
          </div>
        </li>
        <hr />
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">Unicode property or script category</div>
            <div class="IVPLo i8N8D" onClick={()=> setClickToken("\\p{...}")}>
\p&#123;...&#125;
</div>
          </div>
        </li>
        <hr />
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">Negation of \pX</div>
            <div class="IVPLo i8N8D" onClick={()=> setClickToken("\\PX")}>
\PX
</div>
          </div>
        </li>
        <hr />
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">Negation of \p</div>
            <div class="IVPLo i8N8D" onClick={()=> setClickToken("\\P{...}")}>
\P&#123;...&#125;
</div>
          </div>
        </li>
        <hr />
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">Quote; treat as literals</div>
            <div class="IVPLo i8N8D" onClick={()=> setClickToken("\\Q...\\E")}>
\Q...\E
</div>
          </div>
        </li>
        <hr />
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">Match subpattern `name`</div>
            <div class="IVPLo i8N8D" onClick={()=> setClickToken("\\k{name}")}>
\k&#123;name&#125;
</div>
          </div>
        </li>
        <hr />
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">Match subpattern `name`</div>
            <div class="IVPLo i8N8D" onClick={()=> setClickToken("\\k<name>")}>
\k&lt;name&gt;
</div>
          </div>
        </li>
        <hr />
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">Match subpattern `name`</div>
            <div class="IVPLo i8N8D" onClick={()=> setClickToken("\\k'name'")}>
\k'name'
</div>
          </div>
        </li>
        <hr />
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">Match nth subpattern</div>
            <div class="IVPLo i8N8D" onClick={()=> setClickToken("\\gn")}>
\gn
</div>
          </div>
        </li>
        <hr />
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">Match nth subpattern</div>
            <div class="IVPLo i8N8D" onClick={()=> setClickToken("\\g{n}")}>
\g&#123;n&#125;
</div>
          </div>
        </li>
        <hr />
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">
              Match text the nth relative previous subpattern matched
            </div>
            <div class="IVPLo i8N8D" onClick={()=> setClickToken("\\g{-n}")}>
\g&#123;-n&#125;
</div>
          </div>
        </li>
        <hr />
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">Recurse nth capture group</div>
            <div class="IVPLo i8N8D" onClick={()=> setClickToken("\\g<n>")}>
\g&lt;n&gt;
</div>
          </div>
        </li>
        <hr />
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">Recurse nth relative upcoming subpattern</div>
            <div class="IVPLo i8N8D" onClick={()=> setClickToken("\\g<+n>")}>
\g&lt;+n&gt;
</div>
          </div>
        </li>
        <hr />
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">Recurse nth capture group.</div>
            <div class="IVPLo i8N8D" onClick={()=> setClickToken("\\g'n'")}>
\g'n'
</div>
          </div>
        </li>
        <hr />
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">Recurse nth relative upcoming subpattern</div>
            <div class="IVPLo i8N8D" onClick={()=> setClickToken("\\g'+n'")}>
\g'+n'
</div>
          </div>
        </li>
        <hr />
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">
              Match previously-named capture group `letter`
            </div>
            <div class="IVPLo i8N8D" onClick={()=> setClickToken("\\g{letter}")}>
\g&#123;letter&#125;
</div>
          </div>
        </li>
        <hr />
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">Recurse named capture group `letter`</div>
            <div class="IVPLo i8N8D" onClick={()=> setClickToken("\\<letter>")}>
\g&lt;letter&gt;
</div>
          </div>
        </li>
        <hr />
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">Recurse named capture group `letter`</div>
            <div class="IVPLo i8N8D" onClick={()=> setClickToken("\\g'letter'")}>
\g'letter'
</div>
          </div>
        </li>
        <hr />
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">Hex character YY</div>
            <div class="IVPLo i8N8D" onClick={()=> setClickToken("\\xYY")}>
\xYY
</div>
          </div>
        </li>
        <hr />
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">Hex character YYYY</div>
            <div class="IVPLo i8N8D" onClick={()=> setClickToken("\\x{YYYY}")}>
\x&#123;YYYY&#125;
</div>
          </div>
        </li>
        <hr />
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">Octal character ddd</div>
            <div class="IVPLo i8N8D" onClick={()=> setClickToken("\\ddd")}>
\ddd
</div>
          </div>
        </li>
        <hr />
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">Control character Y</div>
            <div class="IVPLo i8N8D" onClick={()=> setClickToken("\\cY")}>
\cY
</div>
          </div>
        </li>
        <hr />
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">Backspace character</div>
            <div class="IVPLo i8N8D" onClick={()=> setClickToken("[\\b]")}>
[\b]
</div>
          </div>
        </li>
        <hr />
        <li class="b0Wk4 tu7rF" role="button" tabindex="0">
          <div class="divegrid">
            <div class="Lta24">Makes any character literal</div>
            <div class="IVPLo i8N8D" onClick={()=> setClickToken("\\")}>
\
</div>
          </div>
        </li>
        <hr />
      </ul>
    </div>
  );
};

export default MetaSeq;
