import React from "react";
import styled from "styled-components";
import { THEME } from "../util";

const ResultsPage = styled.main`
  color: ${THEME.black};
  font-family: "Open Sans", "Arial", sans-serif;
  font-size: 20px;
  padding: 1em;
`;

const Header = styled.header`
  margin: 0 0 1em 0;
`;

const QueryHeading = styled.h2`
  font-family: ${THEME.font.serif};
  font-weight: 400;
  margin: 0;

  strong {
    font-family: ${THEME.font.sansSerif};
  }
`;

const EntriesContainer = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const ResultEntry = styled.li`
  ${props => (props.sponsored ? `background-color: ${THEME.green}` : "")};
  border-radius: 2px;
  margin: 0 0 1em;
  max-width: 760px;
  &:hover {
    background: ${props =>
      props.sponsored ? THEME.greenLight : THEME.grayLight};
  }
`;

const EntryWrapper = styled.a.attrs({ href: "#!" })`
  color: ${THEME.black};
  display: block;
  text-decoration: none;
  &:focus {
    outline: 1px dotted ${THEME.grayDark};
  }
  &:active {
    outline: 1px dotted ${THEME.black};
  }
`;

const EntryImage = styled.div`
  background-color: ${THEME.grayDark};
  background-image: url(${props => props.imageSource});
  background-position: center;
  background-size: cover;
  border-radius: 2px;
  display: block;
  height: 33vw;
  vertical-align: middle;

  @media only screen and (min-width: 768px) {
    display: inline-block;
    height: 20vw;
    width: 20vw;
    max-height: 150px;
    max-width: 150px;
  }
`;

const EntryContent = styled.article`
  display: inline-block;
  padding: 0.5em 1em;
  vertical-align: top;
  // max-height: 150px;
`;

const EntryHeading = styled.h3`
  font-family: ${THEME.font.serif};
  font-size: 1em;
  margin: 0 auto 1em;
`;

const SponsoredTag = styled.span`
  color: ${THEME.greenDark};
`;

const EntryPreview = styled.p`
  font-family: ${THEME.font.serif};
  font-size: 1em;
  margin: auto;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 415px; //470px;
`;

const EntryDate = styled.aside`
  font-family: ${THEME.font.serif};
  font-size: 16px;
  margin: 0;
  padding: 10px;
  text-align: right;
  vertical-align: top;
  @media only screen and (min-width: 768px) {
    display: inline-block;
    padding: 10px 10px 0 0;
    text-align: left;
  }
`;

export default props => (
  <ResultsPage>
    <Header>
      <QueryHeading>
        Search results for: <strong>{props.query}</strong>
      </QueryHeading>
    </Header>
    <EntriesContainer>
      <ResultEntry sponsored>
        <EntryWrapper>
          <EntryImage imageSource="https://raw.githubusercontent.com/geoffdavis92/weekly-ui-assets/master/results-page/day1/soccer-1.jpg" />
          <EntryContent>
            <EntryHeading>
              Best MLS Fan Experiences&nbsp;<SponsoredTag>
                -&nbsp;sponsored
              </SponsoredTag>
            </EntryHeading>
            <EntryPreview>
              Sit pariatur mollit eu non magna nulla ullamco esse adipisicing
              non amet cupidatat esse do nulla est consequat…
            </EntryPreview>
          </EntryContent>
          <EntryDate>4/22/2018</EntryDate>
        </EntryWrapper>
      </ResultEntry>
      <ResultEntry>
        <EntryWrapper>
          <EntryImage imageSource="https://raw.githubusercontent.com/geoffdavis92/weekly-ui-assets/master/results-page/day1/soccer-2.jpg" />
          <EntryContent>
            <EntryHeading>Best MLS Fan Experiences</EntryHeading>
            <EntryPreview>
              Laboris officia exercitation commodo et sunt minim cillum labore
              culpa adipisicing aliquip.
            </EntryPreview>
          </EntryContent>
          <EntryDate>4/22/2018</EntryDate>
        </EntryWrapper>
      </ResultEntry>
      <ResultEntry>
        <EntryWrapper>
          <EntryImage imageSource="https://raw.githubusercontent.com/geoffdavis92/weekly-ui-assets/master/results-page/day1/soccer-3.jpg" />
          <EntryContent>
            <EntryHeading>Best MLS Fan Experiences</EntryHeading>
            <EntryPreview>
              Elit aliqua dolore dolor nisi elit excepteur tempor sunt id
              aliquip enim enim officia esse cupidatat nostrud dolor labore…
            </EntryPreview>
          </EntryContent>
          <EntryDate>4/22/2018</EntryDate>
        </EntryWrapper>
      </ResultEntry>
      <ResultEntry>
        <EntryWrapper>
          <EntryImage imageSource="https://raw.githubusercontent.com/geoffdavis92/weekly-ui-assets/master/results-page/day1/soccer-4.jpg" />
          <EntryContent>
            <EntryHeading>Best MLS Fan Experiences</EntryHeading>
            <EntryPreview>
              Commodo labore culpa duis eiusmod ipsum minim non excepteur aute
              sint quis do nulla irure voluptate…
            </EntryPreview>
          </EntryContent>
          <EntryDate>4/22/2018</EntryDate>
        </EntryWrapper>
      </ResultEntry>
    </EntriesContainer>
  </ResultsPage>
);
