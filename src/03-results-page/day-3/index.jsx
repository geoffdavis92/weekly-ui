import React from "react";
import styled from "styled-components";
import FA from "@fortawesome/react-fontawesome";
import { faListUl, faTh } from "@fortawesome/fontawesome-free-solid";
import { THEME } from "../util";

const Page = styled.main`
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
  ${props =>
    props.entryStyle === "grid"
      ? `background-image: url(${props.imageSource}); background-size: cover;`
      : ""} border-radius: 2px;
  display: inline-block;
  ${props =>
    props.entryStyle === "list"
      ? `margin: 0 0 1em; max-width: 760px;`
      : `height: calc(20vw - 1em); margin: 0 1em 1em 0; width: calc(20vw - 1em)`};
  ${props =>
    props.entryStyle !== "grid"
      ? `&:hover {
    background: ${props =>
      props.sponsored ? THEME.greenLight : THEME.grayLight};
  }`
      : `
        position: relative;
        
        article {
          background: linear-gradient(to top, ${THEME.black}, transparent );
          position: absolute;
          bottom: 0;
          width: calc(100% - 2em);

          h3 {
            color: #fff;
            margin: 0;
            text-shadow: 2px 2px 2px ${THEME.black};
            span {
              color: #fff;
              display: block;
            }
          }
        }
      `};
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

const ToggleWrapper = styled.section`
  margin: 0 0 0.5em;
`;

const ToggleButton = styled.button`
  background: ${props => (!props.active ? THEME.grayDark : "#fff")};
  border: 1px solid ${THEME.black};
  ${props =>
    props.right
      ? `
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
  `
      : `
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
  `}
  color: ${props => (props.active ? THEME.black : THEME.grayLight)};
  font-size: 16px;
  padding: 0.5em;
  ${props =>
    props.right
      ? `
    border-left: none;
    `
      : ""};
  &:focus {
    outline: 1px dotted ${THEME.grayDark};
  }
  &:active {
    outline: 1px dotted ${THEME.black};
  }
`;

const ViewToggle = props => {
  return (
    <ToggleWrapper>
      <ToggleButton
        active={props.listToggled}
        onClick={e => props.toggleView({ view: "left" })}
      >
        <FA icon={faListUl} /> List
      </ToggleButton>
      <ToggleButton
        active={props.gridToggled}
        onClick={e => props.toggleView({ view: "right" })}
        right
      >
        <FA icon={faTh} /> Grid
      </ToggleButton>
    </ToggleWrapper>
  );
};

export default class ResultsPage extends React.Component {
  state = { listToggled: true, gridToggled: false };
  _handleToggleView = ({ view }) => {
    this.setState(prevState => ({
      listToggled: view === "left" ? true : false,
      gridToggled: view === "right" ? true : false
    }));
  };
  render() {
    return (
      <Page>
        <Header>
          <QueryHeading>
            Search results for: <strong>{this.props.query}</strong>
          </QueryHeading>
        </Header>
        <ViewToggle
          listToggled={this.state.listToggled}
          gridToggled={this.state.gridToggled}
          toggleView={this._handleToggleView}
        />
        <EntriesContainer>
          <ResultEntry
            entryStyle={this.state.listToggled ? "list" : "grid"}
            sponsored
            imageSource="https://raw.githubusercontent.com/geoffdavis92/weekly-ui-assets/master/results-page/day1/soccer-1.jpg"
          >
            <EntryWrapper>
              {this.state.listToggled && (
                <EntryImage imageSource="https://raw.githubusercontent.com/geoffdavis92/weekly-ui-assets/master/results-page/day1/soccer-1.jpg" />
              )}
              <EntryContent>
                <EntryHeading>
                  Best MLS Fan Experiences&nbsp;<SponsoredTag>
                    -&nbsp;sponsored
                  </SponsoredTag>
                </EntryHeading>
                {this.state.listToggled && (
                  <EntryPreview>
                    Sit pariatur mollit eu non magna nulla ullamco esse
                    adipisicing non amet cupidatat esse do nulla est consequat…
                  </EntryPreview>
                )}
              </EntryContent>
              {this.state.listToggled && <EntryDate>4/22/2018</EntryDate>}
            </EntryWrapper>
          </ResultEntry>
          <ResultEntry
            entryStyle={this.state.listToggled ? "list" : "grid"}
            imageSource="https://raw.githubusercontent.com/geoffdavis92/weekly-ui-assets/master/results-page/day1/soccer-2.jpg"
          >
            <EntryWrapper>
              {this.state.listToggled && (
                <EntryImage imageSource="https://raw.githubusercontent.com/geoffdavis92/weekly-ui-assets/master/results-page/day1/soccer-2.jpg" />
              )}
              <EntryContent>
                <EntryHeading>Week 7 Crowd Attendance</EntryHeading>
                {this.state.listToggled && (
                  <EntryPreview>
                    Laboris officia exercitation commodo et sunt minim cillum
                    labore culpa adipisicing aliquip.
                  </EntryPreview>
                )}
              </EntryContent>
              {this.state.listToggled && <EntryDate>4/22/2018</EntryDate>}
            </EntryWrapper>
          </ResultEntry>
          <ResultEntry
            entryStyle={this.state.listToggled ? "list" : "grid"}
            imageSource="https://raw.githubusercontent.com/geoffdavis92/weekly-ui-assets/master/results-page/day1/soccer-3.jpg"
          >
            <EntryWrapper>
              {this.state.listToggled && (
                <EntryImage imageSource="https://raw.githubusercontent.com/geoffdavis92/weekly-ui-assets/master/results-page/day1/soccer-3.jpg" />
              )}
              <EntryContent>
                <EntryHeading>Report: Homegrown GK training lacking</EntryHeading>
                {this.state.listToggled && (
                  <EntryPreview>
                    Elit aliqua dolore dolor nisi elit excepteur tempor sunt id
                    aliquip enim enim officia esse cupidatat nostrud dolor
                    labore…
                  </EntryPreview>
                )}
              </EntryContent>
              {this.state.listToggled && <EntryDate>4/22/2018</EntryDate>}
            </EntryWrapper>
          </ResultEntry>
          <ResultEntry
            entryStyle={this.state.listToggled ? "list" : "grid"}
            imageSource="https://raw.githubusercontent.com/geoffdavis92/weekly-ui-assets/master/results-page/day1/soccer-4.jpg"
          >
            <EntryWrapper>
              {this.state.listToggled && (
                <EntryImage imageSource="https://raw.githubusercontent.com/geoffdavis92/weekly-ui-assets/master/results-page/day1/soccer-4.jpg" />
              )}
              <EntryContent>
                <EntryHeading>Report: Miami to sign Rooney</EntryHeading>
                {this.state.listToggled && (
                  <EntryPreview>
                    Commodo labore culpa duis eiusmod ipsum minim non excepteur
                    aute sint quis do nulla irure voluptate…
                  </EntryPreview>
                )}
              </EntryContent>
              {this.state.listToggled && <EntryDate>4/22/2018</EntryDate>}
            </EntryWrapper>
          </ResultEntry>
        </EntriesContainer>
      </Page>
    );
  }
}
